import { defHttp } from '/@/utils/http/axios';
import {
  LocationSelectItem,
} from './model';

import { ParsedQuery } from 'query-string';

export function getLocationsForSelect(params?: ParsedQuery) {
  return defHttp.request<LocationSelectItem[]>(
    {
      url: '/locations/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}