export class CreatePayrollDto {
  employeeId: number;
  month: string;
  basicSalary: number;
  bonus?: number;
  deductions?: number;
}