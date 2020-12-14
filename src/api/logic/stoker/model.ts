import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {StaffSalary, StaffSalaryInput} from "/@/api/logic/salary/model";
import {StaffClient, StaffLocation} from "/@/api/logic/staffModel";

interface StokerClient extends StaffClient {
}

interface StokerSalary extends StaffSalary {
}

interface StokerLocation extends StaffLocation {
}

export interface StokerProductType {
  id: number;
  name: string;
}

export interface StokerBot {
  id: number;
  name: string;
}

export interface Stoker {
  id: number;
  name: string;
  client?: StokerClient;
  locations: StokerLocation[];
  productTypes: StokerProductType[];
  source: StokerBot;
  salary?: StokerSalary;
  unpaid_salary: string;
  created_at: string;
}

export interface StokerSelectItem {
  value: number;
  text: string;
}

export interface StokerInput extends StaffSalaryInput {
  [field: string]: any;
  client_id: number|string;
  location_ids: number[]|string[];
  product_type_ids: number[]|string[];
}

export interface StokerFetchResult<T extends Stoker> extends BasicTableFetchResult<T> {
}
