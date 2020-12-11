import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {SalaryType, StaffSalaryInput} from "/@/api/logic/salary/model";

interface DriverClient {
  id: number;
  name?: string;
  username?: string;
  telegram_id: number;
}

interface DriverSalary {
  type: SalaryType;
  percent?: number,
  amount?: number,
  amount_formatted?: number,
  display_value: string;
}

interface DriverLocation {
  id: number;
  name_chain: string;
}

export interface Driver {
  id: number;
  name: string;
  client?: DriverClient;
  locations: DriverLocation[];
  permissions: number[];
  salary?: DriverSalary;
  unpaid_salary: string;
  created_at: string;
}

export interface DriverSelectItem {
  value: number;
  text: string;
}

export interface DriverPermissionSelectItem {
  value: number;
  text: string;
}

export interface DriverInput extends StaffSalaryInput {
  [field: string]: any;
  name: string;
  client_id: number|string;
  location_ids: number[]|string[];
  permissions: number[]|string[];
}

export interface DriverFetchResult<T extends Driver> extends BasicTableFetchResult<T> {
}
