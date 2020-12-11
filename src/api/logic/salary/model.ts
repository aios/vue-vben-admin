enum SalaryType {
  percent = 'percent',
  fixed = 'fixed',
}

interface StaffSalaryInput {
  salary_type: SalaryType
  salary_percent?: number
  salary_amount?: number
}