// axios__Some-New-Token__  __Some-New-Token__，__Some-New-Token__，__Some-New-Token__
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { AxiosResponse } from 'axios';
import type { CreateAxiosOptions, RequestOptions, Result } from './types';
import { VAxios } from './Axios';
import { getToken } from '/@/utils/auth';
import { AxiosTransform } from './axiosTransform';

import { checkStatus } from './checkStatus';

import { useGlobSetting } from '/@/hooks/setting';
import { useMessage } from '/@/hooks/web/useMessage';

import { ContentTypeEnum, RequestEnum, ResultEnum } from '/@/enums/httpEnum';

import { isString } from '/@/utils/is';
import { setObjToUrlParams, deepMerge } from '/@/utils';
import { errorStore } from '/@/store/modules/error';
import { errorResult } from './const';
import { useI18n } from '/@/hooks/web/useI18n';
import { createNow, formatRequestDate } from './helper';

const globSetting = useGlobSetting();
const prefix = globSetting.urlPrefix;
const { createMessage, createErrorModal } = useMessage();

/**
 * @description: __Some-New-Token__，__Some-New-Token__
 */
const transform: AxiosTransform = {
  /**
   * @description: __Some-New-Token__
   */
  transformRequestData: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { t } = useI18n();
    const { isTransformRequestResult } = options;

    if (res.status == 204 || res.config.url?.search('csrf-cookie') !== -1) {
      return;
    }
    // __Some-New-Token__，__Some-New-Token__
    // __Some-New-Token__code，data，message__Some-New-Token__

    if (!isTransformRequestResult) {
      return res.data;
    }
    // __Some-New-Token__

    const { data } = res;
    //console.log(res, options, res.config.url?.search('csrf-cookie') == -1);
    // if (!data) {
    //   // return '[HTTP] Request has no return value';
    //   return errorResult;
    // }
    //  __Some-New-Token__ code，result，message__Some-New-Token__ __Some-New-Token__，__Some-New-Token__ types.ts__Some-New-Token__
    //const { code, result, message } = data;
    const code = res.status;
    const message = res.statusText;
    const result = data;
    // __Some-New-Token__
    const hasSuccess = code === ResultEnum.SUCCESS || code === ResultEnum.CREATED;

    if (!hasSuccess) {
      if (message) {
        // errorMessageMode=‘modal’__Some-New-Token__modal__Some-New-Token__，__Some-New-Token__，__Some-New-Token__
        if (options.errorMessageMode === 'modal') {
          createErrorModal({ title: t('sys.api.errorTip'), content: message });
        } else if (options.errorMessageMode === 'message') {
          createMessage.error(message);
        }
      }
      Promise.reject(new Error(message));

      return errorResult;
    }

    // __Some-New-Token__，__Some-New-Token__
    if (code === ResultEnum.SUCCESS || code === ResultEnum.CREATED) {
      return result;
    }
    // __Some-New-Token__，__Some-New-Token__
    if (code === ResultEnum.ERROR) {
      if (message) {
        createMessage.error(data.message);
        Promise.reject(new Error(message));
      } else {
        const msg = t('sys.api.errorMessage');
        createMessage.error(msg);
        Promise.reject(new Error(msg));
      }
      return errorResult;
    }
    // __Some-New-Token__
    if (code === ResultEnum.TIMEOUT) {
      const timeoutMsg = t('sys.api.timeoutMessage');
      createErrorModal({
        title: t('sys.api.operationFailed'),
        content: timeoutMsg,
      });
      Promise.reject(new Error(timeoutMsg));
      return errorResult;
    }
    return errorResult;
  },

  // __Some-New-Token__config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;

    if (joinPrefix) {
      config.url = `${prefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      if (config.url == '/sanctum/csrf-cookie') {
        config.url = `${apiUrl.replace('/api', '')}${config.url}`;
      } else {
        config.url = `${apiUrl}${config.url}`;
      }
    }
    const params = config.params || {};
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        config.data = {
          // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
          params: Object.assign(params || {}, createNow(joinTime, false)),
        };
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${createNow(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        config.data = params;
        config.params = undefined;
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, config.data);
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: __Some-New-Token__
   */
  requestInterceptors: (config) => {
    // __Some-New-Token__config

    const token = getToken();
    if (token) {
      // jwt token
      config.headers.Authorization = token;
    }
    return config;
  },

  /**
   * @description: __Some-New-Token__
   */
  responseInterceptorsCatch: (error: any) => {
    const { t } = useI18n();
    errorStore.setupErrorHandle(error);
    const { response, code, message } = error || {};
    const msg: string = response?.data?.error ? response.data.error.message : '';
    const err: string = error?.toString();
    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        createMessage.error(t('sys.api.apiTimeoutMessage'));
      }
      if (err?.includes('Network Error')) {
        createErrorModal({
          title: t('sys.api.networkException'),
          content: t('sys.api.networkExceptionMsg'),
        });
      }
    } catch (error) {
      throw new Error(error);
    }
    checkStatus(error?.response?.status, msg);
    return Promise.reject(error);
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        timeout: 10 * 1000,
        // __Some-New-Token__
        // baseURL: globSetting.apiUrl,
        // __Some-New-Token__，__Some-New-Token__
        prefixUrl: prefix,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        withCredentials: true,
        // __Some-New-Token__
        transform,
        // __Some-New-Token__，__Some-New-Token__
        requestOptions: {
          // __Some-New-Token__prefix __Some-New-Token__url
          joinPrefix: true,
          // __Some-New-Token__
          isTransformRequestResult: true,
          // post__Some-New-Token__url
          joinParamsToUrl: false,
          // __Some-New-Token__
          formatDate: true,
          errorMessageMode: 'message',
          apiUrl: globSetting.apiUrl,
          //  是否加入时间戳
          joinTime: true,
        },
      },
      opt || {}
    )
  );
}

export const defHttp = createAxios();

// other api url
// export const otherHttp = createAxios({
//   requestOptions: {
//     apiUrl: 'xxx',
//   },
// });
