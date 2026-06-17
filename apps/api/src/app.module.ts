import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeesModule } from './employees/employees.module';
import { InventoryModule } from './inventory/inventory.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PayrollModule } from './payroll/payroll.module';
import { DashboardModule } from './dashboard/dashboard.module';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    EmployeesModule,
    InventoryModule,
  AttendanceModule,
  PayrollModule,
  DashboardModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}