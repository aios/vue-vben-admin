import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {Driver} from "/@/api/logic/driver/model";
import {Operator} from "/@/api/logic/operator/model";
import {Stoker} from "/@/api/logic/stoker/model";

export interface StaffPayment {
  id: number;
  staff: Driver|Operator|Stoker
  amount_formatted: string
  done: number
  created_at: string;
}

export interface StaffPaymentInput {
  [field: string]: any;
  staff: string;
  amount?: number|string
  done: boolean
}

export interface StaffPaymentFetchResult<T extends StaffPayment> extends BasicTableFetchResult<T> {
}
