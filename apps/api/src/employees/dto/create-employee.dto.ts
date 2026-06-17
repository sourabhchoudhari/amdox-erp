import {
  IsString,
  IsEmail,
  IsNumber,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  department: string;

  @IsNumber()
  salary: number;
}