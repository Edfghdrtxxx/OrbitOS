export interface ShellHooks {
  showBanner(title: string, subtitle?: string): void;
  flashDamage(): void;
  flashXP(): void;
  flashPrePause(): void;
  showRunEnd(victory: boolean): void;
}

const noop = (): void => {};

let impl: ShellHooks = {
  showBanner: noop,
  flashDamage: noop,
  flashXP: noop,
  flashPrePause: noop,
  showRunEnd: noop,
};

export function setShellHooks(hooks: Partial<ShellHooks>): void {
  impl = { ...impl, ...hooks };
}

export function showBanner(title: string, subtitle?: string): void {
  impl.showBanner(title, subtitle);
}

export function flashDamage(): void {
  impl.flashDamage();
}

export function flashXP(): void {
  impl.flashXP();
}

export function flashPrePause(): void {
  impl.flashPrePause();
}

export function showRunEnd(victory: boolean): void {
  impl.showRunEnd(victory);
}
