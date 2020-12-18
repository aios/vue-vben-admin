import { defHttp } from '/@/utils/http/axios';
import {
  StaffSelectItem,
} from './model';

import { ParsedQuery } from 'query-string';

export function getStaffForSelect(params?: ParsedQuery) {
  return defHttp.request<StaffSelectItem[]>(
    {
      url: '/staff/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}