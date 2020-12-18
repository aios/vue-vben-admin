import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {SalaryType} from "/@/api/logic/salary/model";
import {StaffLocation} from "/@/api/logic/staffModel";
import {Driver} from "/@/api/logic/driver/model";
import {Operator} from "/@/api/logic/operator/model";
import {Stoker} from "/@/api/logic/stoker/model";

interface SalaryGroupLocation extends StaffLocation {
}

export enum SalaryGroupGroup {
  drivers = 1,
  operators = 2,
  stokers = 3,
}

export enum SalaryGroupDivideType {
  all = 1,
  each = 2,
}

export interface SalaryGroup {
  id: number;
  name: string;
  drivers: Driver[];
  operators: Operator[];
  stokers: Stoker[];
  locations: SalaryGroupLocation[];
  group?: SalaryGroupGroup;
  amount?: number;
  amount_formatted?: string|number;
  percent?: number;
  type: SalaryType;
  divide_type: SalaryGroupDivideType;
  active: number;
  created_at: string;
}

export interface StaffInput {
  id: number;
  type: string;
}

export interface SalaryGroupInput {
  [field: string]: any;
  name: string;
  location_ids: number[]|string[];
  staff: string[];
  type?: SalaryType
  divide_type?: SalaryGroupDivideType
  percent?: number|string
  amount?: number|string
  active: boolean
}

export interface SalaryGroupFetchResult<T extends SalaryGroup> extends BasicTableFetchResult<T> {
}
