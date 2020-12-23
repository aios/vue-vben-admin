import { defHttp } from '/@/utils/http/axios';
import {
  StaffPaymentFetchResult,
  StaffPayment,
  StaffPaymentInput,
} from './model';

import { ParsedQuery } from 'query-string';

import {fixSortParams} from '/@/api/logic/sort';

export function getStaffPayments(params: ParsedQuery) {
  params = fixSortParams(params);

  return defHttp.request<StaffPaymentFetchResult<StaffPayment>>(
    {
      url: '/staff/payments',
      method: 'GET',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function getStaffPayment(id: number) {
  return defHttp.request<StaffPayment>(
    {
      url: `/staff/payments/${id}`,
      method: 'GET',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function createStaffPayment(params: StaffPaymentInput) {
  return defHttp.request(
    {
      url: `/staff/payments`,
      method: 'POST',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function updateStaffPayment(id: number, params: StaffPaymentInput) {
  return defHttp.request(
    {
      url: `/staff/payments/${id}`,
      method: 'PUT',
      params
    },
    {
      errorMessageMode: 'modal',
    }
  );
}

export function deleteStaffPayment(id: number) {
  return defHttp.request(
    {
      url: `/staff/payments/${id}`,
      method: 'DELETE',
    },
    {
      errorMessageMode: 'modal',
    }
  );
}