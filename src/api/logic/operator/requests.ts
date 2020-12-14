import { defHttp } from '/@/utils/http/axios';
import {
  OperatorFetchResult,
  Operator,
  OperatorSelectItem,
  OperatorInput,
} from './model';

import {fixSortParams} from '/@/api/logic/sort';

import { ParsedQuery } from 'query-string';

export function getOperators(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<OperatorFetchResult<Operator>>(
    {
      url: '/operators',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getOperator(id: number) {
  return defHttp.request<Operator>(
    {
      url: `/operators/${id}`,
      method: 'GET',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getOperatorsForSelect(params?: ParsedQuery) {
  return defHttp.request<OperatorSelectItem[]>(
    {
      url: '/operators/for_select',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function createOperator(params: OperatorInput) {
  return defHttp.request(
    {
      url: `/operators`,
      method: 'POST',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function updateOperator(id: number, params: OperatorInput) {
  return defHttp.request(
    {
      url: `/operators/${id}`,
      method: 'PUT',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function deleteOperator(id: number) {
  return defHttp.request(
    {
      url: `/operators/${id}`,
      method: 'DELETE',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}