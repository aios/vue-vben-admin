import { defHttp } from '/@/utils/http/axios';
import {
  StokerFetchResult,
  Stoker,
  StokerSelectItem,
  StokerInput,
} from './model';

import { ParsedQuery } from 'query-string';

import {fixSortParams} from '/@/api/logic/sort';

export function getStokers(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<StokerFetchResult<Stoker>>(
    {
      url: '/stokers',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getStoker(id: number) {
  return defHttp.request<Stoker>(
    {
      url: `/stokers/${id}`,
      method: 'GET',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getStokersForSelect(params?: ParsedQuery) {
  return defHttp.request<StokerSelectItem[]>(
    {
      url: '/stokers/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function createStoker(params: StokerInput) {
  return defHttp.request(
    {
      url: `/stokers`,
      method: 'POST',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function updateStoker(id: number, params: StokerInput) {
  return defHttp.request(
    {
      url: `/stokers/${id}`,
      method: 'PUT',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function deleteStoker(id: number) {
  return defHttp.request(
    {
      url: `/stokers/${id}`,
      method: 'DELETE',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}