import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getStats() {
    const employees =
      await this.prisma.employee.count();

    const inventoryItems =
      await this.prisma.inventory.count();

    const attendanceRecords =
      await this.prisma.attendance.count();

    const payrollRecords =
      await this.prisma.payroll.count();

    const payrollSum =
      await this.prisma.payroll.aggregate({
        _sum: {
          netSalary: true,
        },
      });

    return {
      employees,
      inventoryItems,
      attendanceRecords,
      payrollRecords,
      totalPayroll:
        payrollSum._sum.netSalary || 0,
    };
  }
}