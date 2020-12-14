import { defHttp } from '/@/utils/http/axios';
import {
  BotSelectItem,
} from './model';

import { ParsedQuery } from 'query-string';

export function getBotsForSelect(params?: ParsedQuery) {
  return defHttp.request<BotSelectItem[]>(
    {
      url: '/bots/select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}