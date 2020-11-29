/**
 * __Some-New-Token__，__Some-New-Token__
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestOptions, Result } from './types';

export abstract class AxiosTransform {
  /**
   * @description: __Some-New-Token__
   * @description: Process configuration before request
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description: __Some-New-Token__
   */
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: __Some-New-Token__
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description: __Some-New-Token__
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: __Some-New-Token__
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: __Some-New-Token__
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: __Some-New-Token__
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
