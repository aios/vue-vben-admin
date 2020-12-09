import { defHttp } from '/@/utils/http/axios';
import {
  DriverFetchResult,
  DriverTableItem,
} from './model';

import { ParsedQuery } from 'query-string';

const fixOrder = (order: string): string => {
  const orders: any = {ascend: 'asc', descend: 'desc'};

  return orders[order] || '';
}

export function getDrivers(params: ParsedQuery) {
  if (params.field) {
    params.sortField = params.field;
    delete params.field;
  }

  if (params.order) {
    params.sortDirection = fixOrder(<string>params.order);
    delete params.order;
  }

  return defHttp.request<DriverFetchResult<DriverTableItem>>(
    {
      url: '/drivers',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function deleteDriver(id: number) {
  return defHttp.request(
    {
      url: `/drivers/${id}`,
      method: 'DELETE',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}