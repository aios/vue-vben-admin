import { defHttp } from '/@/utils/http/axios';
import {
  SalaryGroupFetchResult,
  SalaryGroup,
  SalaryGroupInput,
} from './model';

import { ParsedQuery } from 'query-string';

import {fixSortParams} from '/@/api/logic/sort';

export function getSalaryGroups(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<SalaryGroupFetchResult<SalaryGroup>>(
    {
      url: '/staff/salary-groups',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getSalaryGroup(id: number) {
  return defHttp.request<SalaryGroup>(
    {
      url: `/staff/salary-groups/${id}`,
      method: 'GET',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function createSalaryGroup(params: SalaryGroupInput) {
  return defHttp.request(
    {
      url: `/staff/salary-groups`,
      method: 'POST',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function updateSalaryGroup(id: number, params: SalaryGroupInput) {
  return defHttp.request(
    {
      url: `/staff/salary-groups/${id}`,
      method: 'PUT',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function deleteSalaryGroup(id: number) {
  return defHttp.request(
    {
      url: `/staff/salary-groups/${id}`,
      method: 'DELETE',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}