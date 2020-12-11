export enum SalaryType {
  percent = 2,
  fixed = 1,
}

export interface StaffSalaryInput {
  salary_type?: SalaryType
  salary_percent?: number|string
  salary_amount?: number|string
}