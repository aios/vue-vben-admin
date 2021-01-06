import type { GlobEnvConfig } from '/@/types/config';

export function getGlobEnvConfig(): GlobEnvConfig {
  const env = import.meta.env;
  return (env as unknown) as GlobEnvConfig;
}

/**
 * @description: __Some-New-Token__
 */
export const devMode = 'development';

/**
 * @description: __Some-New-Token__
 */
export const prodMode = 'production';

/**
 * @description: __Some-New-Token__
 * @returns:
 * @example:
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description: __Some-New-Token__
 * @returns:
 * @example:
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description: __Some-New-Token__
 * @returns:
 * @example:
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}

/**
 * @description: __Some-New-Token__mock
 * @returns:
 * @example:
 */
export function isUseMock(): boolean {
  return import.meta.env.VITE_USE_MOCK === 'true';
}
