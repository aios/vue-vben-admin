import type { AxiosRequestConfig, Canceler } from 'axios';
import axios from 'axios';

import { isFunction } from '/@/utils/is';

// __Some-New-Token__ Map __Some-New-Token__ __Some-New-Token__ __Some-New-Token__
let pendingMap = new Map<string, Canceler>();

export const getPendingUrl = (config: AxiosRequestConfig) => [config.method, config.url].join('&');

export class AxiosCanceler {
  /**
   * __Some-New-Token__
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    this.removePending(config);
    const url = getPendingUrl(config);
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          // __Some-New-Token__ pending __Some-New-Token__，__Some-New-Token__
          pendingMap.set(url, cancel);
        }
      });
  }

  /**
   * @description: __Some-New-Token__pending
   */
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel();
    });
    pendingMap.clear();
  }

  /**
   * __Some-New-Token__
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config);

    if (pendingMap.has(url)) {
      // __Some-New-Token__ pending __Some-New-Token__，__Some-New-Token__，__Some-New-Token__
      const cancel = pendingMap.get(url);
      cancel && cancel(url);
      pendingMap.delete(url);
    }
  }

  /**
   * @description: __Some-New-Token__
   */
  reset(): void {
    pendingMap = new Map<string, Canceler>();
  }
}
