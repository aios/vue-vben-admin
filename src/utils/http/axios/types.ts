import type { AxiosRequestConfig } from 'axios';
import { AxiosTransform } from './axiosTransform';

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;

export interface RequestOptions {
  // __Some-New-Token__url
  joinParamsToUrl?: boolean;
  // __Some-New-Token__
  formatDate?: boolean;
  //  __Some-New-Token__
  isTransformRequestResult?: boolean;
  // __Some-New-Token__url
  joinPrefix?: boolean;
  // __Some-New-Token__， __Some-New-Token__apiUrl
  apiUrl?: string;
  errorMessageMode?: ErrorMessageMode;
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}
// multipart/form-data：__Some-New-Token__
export interface UploadFileParams {
  // __Some-New-Token__
  data?: { [key: string]: any };
  // __Some-New-Token__
  name?: string;
  // __Some-New-Token__
  file: File | Blob;
  // __Some-New-Token__
  filename?: string;
  [key: string]: any;
}
