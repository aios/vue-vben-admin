import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {Driver} from "/@/api/logic/driver/model";
import {Operator} from "/@/api/logic/operator/model";
import {Stoker} from "/@/api/logic/stoker/model";

export interface Payroll {
  id: number;
  staff: Driver|Operator|Stoker
  amount: string
  date: string
}

export interface PayrollFetchResult<T extends Payroll> extends BasicTableFetchResult<T> {
}

export interface PayrollStatisticPoint {
  amount: string;
  year: number;
  month: number;
  day?: number;
}