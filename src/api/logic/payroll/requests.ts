import { defHttp } from '/@/utils/http/axios';
import {
  PayrollFetchResult,
  Payroll,
} from './model';

import { ParsedQuery } from 'query-string';

import {fixSortParams} from '/@/api/logic/sort';

export function getPayrolls(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<PayrollFetchResult<Payroll>>(
    {
      url: '/staff/payrolls',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}