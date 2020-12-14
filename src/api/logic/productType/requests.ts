import { defHttp } from '/@/utils/http/axios';
import {
  ProductTypeSelectItem,
} from './model';

import { ParsedQuery } from 'query-string';

export function getProductTypesForSelect(params?: ParsedQuery) {
  return defHttp.request<ProductTypeSelectItem[]>(
    {
      url: '/product_types/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}