import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {StaffSalary, StaffSalaryInput} from "/@/api/logic/salary/model";
import {StaffClient, StaffLocation} from "/@/api/logic/staffModel";

interface DriverClient extends StaffClient {
}

interface DriverSalary extends StaffSalary {
}

interface DriverLocation extends StaffLocation {
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
