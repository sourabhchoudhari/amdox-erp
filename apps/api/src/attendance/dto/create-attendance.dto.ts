export class CreateAttendanceDto {
  employeeId: number;
  date: Date;
  status: string;
  checkIn?: string;
  checkOut?: string;
}