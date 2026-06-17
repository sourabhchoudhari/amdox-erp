import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';

@Injectable()
export class PayrollService {
  constructor(private prisma: PrismaService) {}

  create(createPayrollDto: CreatePayrollDto) {
    const bonus = createPayrollDto.bonus || 0;
    const deductions = createPayrollDto.deductions || 0;

    const netSalary =
      createPayrollDto.basicSalary + bonus - deductions;

    return this.prisma.payroll.create({
      data: {
        employeeId: createPayrollDto.employeeId,
        month: createPayrollDto.month,
        basicSalary: createPayrollDto.basicSalary,
        bonus,
        deductions,
        netSalary,
      },
    });
  }

  findAll() {
    return this.prisma.payroll.findMany();
  }

  findOne(id: number) {
    return this.prisma.payroll.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePayrollDto: UpdatePayrollDto) {
    const bonus = updatePayrollDto.bonus || 0;
    const deductions = updatePayrollDto.deductions || 0;

    let netSalary;

    if (updatePayrollDto.basicSalary !== undefined) {
      netSalary =
        updatePayrollDto.basicSalary +
        bonus -
        deductions;
    }

    return this.prisma.payroll.update({
      where: { id },
      data: {
        ...updatePayrollDto,
        ...(netSalary !== undefined && { netSalary }),
      },
    });
  }

  remove(id: number) {
    return this.prisma.payroll.delete({
      where: { id },
    });
  }
}