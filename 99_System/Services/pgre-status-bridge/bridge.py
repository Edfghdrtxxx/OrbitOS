#!/usr/bin/env python3
"""Persist the Physics GRE Studio's read-only agent status summary."""

import json
import os
import sys
import tempfile
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

HOST = "127.0.0.1"
PORT = int(os.environ.get("PGRE_STATUS_PORT", "4789"))
STATUS_FILE = Path(
    os.environ.get("PGRE_STATUS_FILE", "~/.orbitos/pgre-status.json")
).expanduser()
MAX_BODY_BYTES = 1024 * 1024


def write_atomically(payload):
    STATUS_FILE.parent.mkdir(mode=0o700, parents=True, exist_ok=True)
    fd, temporary_name = tempfile.mkstemp(
        dir=STATUS_FILE.parent,
        prefix=f".{STATUS_FILE.name}.",
    )
    try:
        with os.fdopen(fd, "wb") as temporary_file:
            temporary_file.write(payload)
            temporary_file.flush()
            os.fsync(temporary_file.fileno())
        os.chmod(temporary_name, 0o600)
        os.replace(temporary_name, STATUS_FILE)
    finally:
        try:
            os.unlink(temporary_name)
        except FileNotFoundError:
            pass


class StatusHandler(BaseHTTPRequestHandler):
    server_version = "OrbitOSPGREStatus/1.0"

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, status, payload):
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_OPTIONS(self):
        if self.path != "/pgre-status":
            self.send_json(404, b'{"error":"not found"}\n')
            return
        self.send_response(204)
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self):
        if self.path != "/pgre-status":
            self.send_json(404, b'{"error":"not found"}\n')
            return
        try:
            payload = STATUS_FILE.read_bytes()
        except FileNotFoundError:
            self.send_json(404, b'{"error":"studio status unavailable"}\n')
            return
        self.send_json(200, payload)

    def do_POST(self):
        if self.path != "/pgre-status":
            self.send_json(404, b'{"error":"not found"}\n')
            return
        try:
            content_length = int(self.headers.get("Content-Length", ""))
        except ValueError:
            content_length = -1
        if content_length < 0:
            self.send_json(411, b'{"error":"Content-Length required"}\n')
            return
        if content_length > MAX_BODY_BYTES:
            self.send_json(413, b'{"error":"status body too large"}\n')
            return

        raw_body = self.rfile.read(content_length)
        try:
            summary = json.loads(raw_body)
        except (UnicodeDecodeError, json.JSONDecodeError):
            self.send_json(400, b'{"error":"invalid JSON"}\n')
            return
        if not isinstance(summary, dict):
            self.send_json(400, b'{"error":"status must be a JSON object"}\n')
            return

        payload = (
            json.dumps(summary, ensure_ascii=False, separators=(",", ":")) + "\n"
        ).encode("utf-8")
        write_atomically(payload)
        self.send_json(200, b'{"ok":true}\n')

    def log_message(self, message_format, *args):
        print(
            f"{self.address_string()} - {message_format % args}",
            file=sys.stderr,
            flush=True,
        )


def main():
    server = ThreadingHTTPServer((HOST, PORT), StatusHandler)
    print(
        f"Physics GRE status bridge listening on http://{HOST}:{PORT}; "
        f"persisting to {STATUS_FILE}",
        file=sys.stderr,
        flush=True,
    )
    server.serve_forever()


if __name__ == "__main__":
    main()
