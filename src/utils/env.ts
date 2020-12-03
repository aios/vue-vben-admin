import type { GlobEnvConfig } from '/@/types/config';

export const getGlobEnvConfig = (): GlobEnvConfig => {
  const env = import.meta.env;
  return (env as unknown) as GlobEnvConfig;
};

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
export const getEnv = (): string => import.meta.env.MODE;

/**
 * @description: __Some-New-Token__
 * @returns:
 * @example:
 */
export const isDevMode = (): boolean => import.meta.env.DEV;

/**
 * @description: __Some-New-Token__
 * @returns:
 * @example:
 */
export const isProdMode = (): boolean => import.meta.env.PROD;

/**
 * @description: __Some-New-Token__mock
 * @returns:
 * @example:
 */
export const isUseMock = (): boolean => import.meta.env.VITE_USE_MOCK === 'true';
