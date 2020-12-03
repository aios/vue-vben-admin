import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
} from './model/userModel';
import { ParsedQuery } from 'query-string';

enum Api {
  Login = '/login',
  LoginCsrf = '/sanctum/csrf-cookie',
  LoginTg = '/login/telegram/callback',
  GetUserInfoById = '/user',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginTgApi(params: ParsedQuery) {
  return defHttp.request({ url: Api.LoginCsrf }).then(() => {
    return defHttp.request<LoginResultModel>(
      {
        url: Api.LoginTg,
        method: 'POST',
        params,
      },
      {
        errorMessageMode: 'modal',
      }
    );
  });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

/**
 * @description: getUserInfoById
 */
export function getUserInfoById(params: GetUserInfoByUserIdParams) {
  return defHttp.request<GetUserInfoByUserIdModel>(
    {
      url: Api.GetUserInfoById,
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.request<string[]>(
    {
      url: Api.GetPermCodeByUserId,
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}
