import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { once } from 'node:events';
import http from 'node:http';
import { setTimeout as delay } from 'node:timers/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const proxyScript = process.env.CDP_PROXY_SCRIPT || fileURLToPath(new URL('./cdp-proxy.mjs', import.meta.url));
const idleWait = 12500;

async function waitFor(predicate, timeout = 5000) {
  const deadline = Date.now() + timeout;
  while (!predicate()) {
    assert.ok(Date.now() < deadline, 'Timed out waiting for fixture state');
    await delay(25);
  }
}

async function listen(server) {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  return server.address().port;
}

function sendMessage(socket, message) {
  const payload = Buffer.from(JSON.stringify(message));
  const header = Buffer.alloc(payload.length < 126 ? 2 : 4);
  header[0] = 0x81;
  if (payload.length < 126) {
    header[1] = payload.length;
  } else {
    header[1] = 126;
    header.writeUInt16BE(payload.length, 2);
  }
  socket.write(Buffer.concat([header, payload]));
}

async function fixture(context, { autoApprove: approveImmediately = true } = {}) {
  const attempts = [];
  const sockets = new Set();
  let autoApprove = approveImmediately;
  const chrome = http.createServer((request, response) => response.writeHead(404).end());
  chrome.on('connection', socket => {
    sockets.add(socket);
    socket.on('error', () => {});
    socket.on('end', () => socket.destroy());
    socket.on('close', () => sockets.delete(socket));
  });
  function approve(attempt) {
    const { request, socket } = attempt;
    if (socket.destroyed) return false;
    const accept = createHash('sha1')
      .update(request.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
      .digest('base64');
    socket.write('HTTP/1.1 101 Switching Protocols\r\n' +
      'Upgrade: websocket\r\nConnection: Upgrade\r\n' +
      `Sec-WebSocket-Accept: ${accept}\r\n\r\n`);
    let buffered = Buffer.alloc(0);
    socket.on('data', chunk => {
      buffered = Buffer.concat([buffered, chunk]);
      while (buffered.length >= 2) {
        const opcode = buffered[0] & 0x0f;
        let length = buffered[1] & 0x7f;
        let offset = 2;
        if (length === 126) {
          if (buffered.length < 4) return;
          length = buffered.readUInt16BE(2);
          offset = 4;
        }
        assert.notEqual(length, 127, 'Fixture only accepts small CDP messages');
        if (buffered.length < offset + 4 + length) return;
        const mask = buffered.subarray(offset, offset + 4);
        const payload = Buffer.from(buffered.subarray(offset + 4, offset + 4 + length));
        buffered = buffered.subarray(offset + 4 + length);
        if (opcode === 8) {
          socket.end(Buffer.from([0x88, 0]));
          return;
        }
        for (let index = 0; index < payload.length; index++) payload[index] ^= mask[index % 4];
        const command = JSON.parse(payload.toString());
        const result = command.method === 'Target.getTargets'
          ? { targetInfos: [{ targetId: 'fixture-page', type: 'page', title: 'Isolated fixture' }] }
          : {};
        sendMessage(socket, { id: command.id, result });
      }
    });
    return true;
  }
  chrome.on('upgrade', (request, socket) => {
    assert.equal(request.url, '/devtools/browser');
    const attempt = { request, socket, started: Date.now() };
    attempts.push(attempt);
    if (autoApprove) approve(attempt);
    socket.resume();
  });
  const chromePort = await listen(chrome);
  const reservation = http.createServer();
  const proxyPort = await listen(reservation);
  await new Promise(resolve => reservation.close(resolve));
  let output = '';
  const proxy = spawn(process.execPath, [proxyScript], {
    env: { ...process.env, CDP_PROXY_PORT: String(proxyPort), CDP_CHROME_WS_URL: `ws://127.0.0.1:${chromePort}/devtools/browser` },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  proxy.stdout.on('data', chunk => { output += chunk; });
  proxy.stderr.on('data', chunk => { output += chunk; });
  context.after(async () => {
    if (process.env.CDP_PROXY_TEST_LOGS) console.log(output.trim());
    const exited = once(proxy, 'exit');
    proxy.kill();
    await exited;
    for (const socket of sockets) socket.destroy();
    await new Promise(resolve => chrome.close(resolve));
  });
  await waitFor(() => output.includes('[CDP Proxy] 运行在'));
  function request(route = '/targets') {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${proxyPort}${route}`, response => {
        let body = '';
        response.on('data', chunk => { body += chunk; });
        response.on('end', () => resolve({ status: response.statusCode, body: JSON.parse(body) }));
        response.on('error', reject);
      }).on('error', reject);
    });
  }
  return {
    attempts, approve, request, proxyPort, chromePort,
    holdApprovals() { autoApprove = false; },
    output() { return output; },
  };
}

test('startup and health checks never initiate a browser handshake', async context => {
  const chrome = await fixture(context);
  for (let index = 0; index < 4; index++) {
    const health = await chrome.request('/health');
    assert.equal(health.body.connected, false);
    await delay(1000);
  }
  assert.equal(chrome.attempts.length, 0);
  console.log('startup + 4 health checks: 0 handshakes');
});

test('one connection serves many requests; a drop stays idle until one shared reconnect', async context => {
  const chrome = await fixture(context);
  assert.equal((await chrome.request()).body[0].targetId, 'fixture-page');
  await Promise.all(Array.from({ length: 12 }, () => chrome.request()));
  assert.equal(chrome.attempts.length, 1);
  console.log('normal connect + 12 requests: 1 handshake');

  chrome.holdApprovals();
  chrome.attempts[0].socket.destroy();
  await waitFor(() => chrome.output().includes('code 1006'));
  await delay(idleWait);
  assert.equal((await chrome.request('/health')).body.connected, false);
  assert.equal(chrome.attempts.length, 1);
  console.log(`drop + ${idleWait}ms idle (>4 former retry periods): 0 new handshakes`);

  const requests = Array.from({ length: 8 }, () => chrome.request());
  await waitFor(() => chrome.attempts.length > 1);
  await delay(idleWait);
  assert.equal(chrome.attempts.length, 2);
  console.log(`8 concurrent requests + ${idleWait}ms pending: exactly 1 new handshake`);
  assert.equal(chrome.approve(chrome.attempts[1]), true);
  const results = await Promise.all(requests);
  assert.ok(results.every(result => result.status === 200 && result.body[0].targetId === 'fixture-page'));
  await Promise.all(Array.from({ length: 12 }, () => chrome.request()));
  assert.equal(chrome.attempts.length, 2);
  console.log('approval + 8 waiting + 12 further requests: same connection, all HTTP 200');
});

test('failed approval does not retry without another browser request', async context => {
  const chrome = await fixture(context);
  chrome.holdApprovals();
  const requests = Array.from({ length: 5 }, () => chrome.request());
  await waitFor(() => chrome.attempts.length === 1);
  chrome.attempts[0].socket.destroy();
  const results = await Promise.all(requests);
  assert.ok(results.every(result => result.status === 500));
  await delay(idleWait);
  assert.equal(chrome.attempts.length, 1);
  console.log('failed handshake + 5 waiting requests + idle: HTTP 500, 0 automatic retries');
  const retry = chrome.request();
  await waitFor(() => chrome.attempts.length === 2);
  assert.equal(chrome.approve(chrome.attempts[1]), true);
  assert.equal((await retry).status, 200);
});

test('dependency check requests Chrome once and reuses the connection', async context => {
  const chrome = await fixture(context, { autoApprove: false });
  const checker = spawn(process.execPath, [fileURLToPath(new URL('./check-deps.mjs', import.meta.url))], {
    env: { ...process.env, CDP_PROXY_PORT: String(chrome.proxyPort), CDP_CHROME_WS_URL: `ws://127.0.0.1:${chrome.chromePort}/devtools/browser` },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  let output = '';
  checker.stdout.on('data', chunk => { output += chunk; });
  checker.stderr.on('data', chunk => { output += chunk; });
  context.after(() => checker.kill());
  const exited = once(checker, 'exit');
  await waitFor(() => chrome.attempts.length === 1);
  await delay(5000);
  assert.equal(chrome.attempts.length, 1);
  assert.equal(chrome.approve(chrome.attempts[0]), true);
  const [code] = await exited;
  assert.equal(code, 0, output);
  assert.equal(chrome.attempts.length, 1);
  assert.match(output, /proxy: ready/);
  assert.equal((await chrome.request()).status, 200);
  assert.equal(chrome.attempts.length, 1);
  console.log('check-deps + browser request: HTTP 200, 1 shared handshake');
});

test('native handshake timeout leaves an expired approval, not an open connection', {
  skip: !process.env.CDP_PROXY_LONG_TEST,
  timeout: 350000,
}, async context => {
  const chrome = await fixture(context, { autoApprove: false });
  const waiting = chrome.request();
  await waitFor(() => chrome.attempts.length === 1);
  const attempt = chrome.attempts[0];
  await waitFor(() => attempt.socket.destroyed, 315000);
  const elapsed = Date.now() - attempt.started;
  assert.ok(elapsed >= 299000 && elapsed < 315000, `Unexpected timeout: ${elapsed}ms`);
  console.log(`unanswered handshake expired after ${elapsed}ms; late Allow accepted: ${chrome.approve(attempt)}`);
  assert.equal((await waiting).status, 500);
  await delay(idleWait);
  console.log(`handshakes after expiry + ${idleWait}ms idle: ${chrome.attempts.length}`);
  assert.equal(chrome.attempts.length, 1);
  const retry = chrome.request();
  await waitFor(() => chrome.attempts.length >= 2);
  assert.equal(chrome.approve(chrome.attempts.at(-1)), true);
  assert.equal((await retry).status, 200);
  console.log('Allow for current handshake: HTTP 200 (same endpoint and browser path)');
  assert.equal(chrome.attempts.length, 2);
});
