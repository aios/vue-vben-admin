import { defHttp } from '/@/utils/http/axios';
import {
  ClientSelectItem,
} from './model';

import { ParsedQuery } from 'query-string';

export function getClientsForSelect(params?: ParsedQuery) {
  return defHttp.request<ClientSelectItem[]>(
    {
      url: '/clients/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}