export interface DebounceAndThrottleOptions {
  // __Some-New-Token__
  immediate?: boolean;

  // __Some-New-Token__debounce
  debounce?: boolean;
  // __Some-New-Token__
  once?: boolean;
}
export type CancelFn = () => void;

export type DebounceAndThrottleProcedure<T extends unknown[]> = (...args: T) => unknown;

export type DebounceAndThrottleProcedureResult<T extends unknown[]> = [
  DebounceAndThrottleProcedure<T>,
  CancelFn
];

import {
  // throttle,
  useThrottle,
} from './useThrottle';

/**
 * @description: Applicable in components
 */
export function useDebounce<T extends unknown[]>(
  handle: DebounceAndThrottleProcedure<T>,
  wait: number,
  options: DebounceAndThrottleOptions = {}
): DebounceAndThrottleProcedureResult<T> {
  return useThrottle(
    handle,
    wait,
    Object.assign(options, {
      debounce: true,
    })
  );
}
