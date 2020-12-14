import { defHttp } from '/@/utils/http/axios';
import {
  DriverFetchResult,
  Driver,
  DriverSelectItem,
  DriverPermissionSelectItem, DriverInput,
} from './model';

import { ParsedQuery } from 'query-string';

import {fixSortParams} from '/@/api/logic/sort';

export function getDrivers(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<DriverFetchResult<Driver>>(
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

export function getDriver(id: number) {
  return defHttp.request<Driver>(
    {
      url: `/drivers/${id}`,
      method: 'GET',
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