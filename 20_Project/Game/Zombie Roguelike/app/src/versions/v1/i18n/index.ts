import { en } from './en';
import type { Dict } from './en';
import { zh } from './zh';
import type { UpgradeId } from '../config/upgrades';

export type Lang = 'en' | 'zh';

const DICTS: Record<Lang, Dict> = { en, zh };

let currentLang: Lang = 'en';

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang): void {
  if (!DICTS[lang]) return;
  currentLang = lang;
}

export function loadSavedLang(storage: Storage = localStorage): boolean {
  try {
    const s = storage.getItem('zr_lang');
    if (s === 'en' || s === 'zh') {
      currentLang = s;
      return true;
    }
  } catch {
    // ignored — storage unavailable
  }
  return false;
}

export function persistLang(lang: Lang, storage: Storage = localStorage): void {
  try {
    storage.setItem('zr_lang', lang);
  } catch {
    // ignored
  }
}

type StringKey = {
  [K in keyof Dict]: Dict[K] extends string ? K : never;
}[keyof Dict];

type FnKey = {
  [K in keyof Dict]: Dict[K] extends (...args: never[]) => string ? K : never;
}[keyof Dict];

export function t(key: StringKey): string;
export function t<K extends FnKey>(key: K, ...args: Parameters<Dict[K] & ((...a: never[]) => string)>): string;
export function t(key: keyof Dict, ...args: unknown[]): string {
  const dict = DICTS[currentLang] ?? en;
  const v = dict[key] ?? en[key];
  if (typeof v === 'function') return (v as (...a: unknown[]) => string)(...args);
  return typeof v === 'string' ? v : String(key);
}

export function tUpgradeName(id: UpgradeId): string {
  const dict = DICTS[currentLang] ?? en;
  return dict.upgradeNames[id] ?? en.upgradeNames[id] ?? id;
}

export function tUpgradeDesc(id: UpgradeId, level: number): string {
  const dict = DICTS[currentLang] ?? en;
  const fn = dict.upgradeDescs[id] ?? en.upgradeDescs[id];
  return fn ? fn(level) : '';
}

export function tFloorName(zeroIdx: number): string {
  const dict = DICTS[currentLang] ?? en;
  const arr = dict.floorNames;
  return arr[Math.max(0, Math.min(arr.length - 1, zeroIdx))] ?? '';
}
