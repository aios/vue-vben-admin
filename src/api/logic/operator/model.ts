import {BasicTableFetchResult} from "/@/api/logic/baseModel";
import {StaffSalary, StaffSalaryInput} from "/@/api/logic/salary/model";
import {StaffClient} from "/@/api/logic/staffModel";

interface OperatorClient extends StaffClient {
}

interface OperatorSalary extends StaffSalary {
}

export interface Operator {
  id: number;
  name: string;
  client?: OperatorClient;
  salary?: OperatorSalary;
  unpaid_salary: string;
  created_at: string;
}

export interface OperatorSelectItem {
  value: number;
  text: string;
}

export interface OperatorInput extends StaffSalaryInput {
  [field: string]: any;
  name: string;
  client_id: number|string;
}

export interface OperatorFetchResult<T extends Operator> extends BasicTableFetchResult<T> {
}
