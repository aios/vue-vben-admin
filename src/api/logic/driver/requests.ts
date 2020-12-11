import { defHttp } from '/@/utils/http/axios';
import {
  DriverFetchResult,
  DriverTableItem,
  DriverSelectItem,
  DriverPermissionSelectItem, DriverInput,
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

export function getDriversForSelect(params?: ParsedQuery) {
  return defHttp.request<DriverSelectItem[]>(
    {
      url: '/drivers/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getDriverPermissionsForSelect(params?: ParsedQuery) {
  return defHttp.request<DriverPermissionSelectItem[]>(
    {
      url: '/drivers/permissions',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function createDriver(params: DriverInput) {
  return defHttp.request(
    {
      url: `/drivers`,
      method: 'POST',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function updateDriver(id: number, params: DriverInput) {
  return defHttp.request(
    {
      url: `/drivers/${id}`,
      method: 'PUT',
      params
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