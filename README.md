# AMDox ERP Backend

A full-stack ERP backend system built using **NestJS**, **Prisma ORM**, and **PostgreSQL**. This project provides secure authentication and management modules for employees, inventory, attendance, payroll, and dashboard analytics.

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Role-Based Access Control (Admin/User)

### Employee Management

* Create Employee
* View Employees
* Update Employee Details
* Delete Employee

### Inventory Management

* Add Inventory Items
* View Inventory Records
* Update Inventory Details
* Delete Inventory Items

### Attendance Management

* Mark Attendance
* View Attendance Records
* Update Attendance Details
* Delete Attendance Records

### Payroll Management

* Generate Payroll
* Automatic Net Salary Calculation
* View Payroll Records
* Update Payroll Details
* Delete Payroll Records

### Dashboard

* Employee Statistics
* Inventory Statistics
* Attendance Statistics
* Payroll Statistics

## 🛠️ Tech Stack

* NestJS
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Passport.js

## 📂 Project Structure

```text
src/
├── auth/
├── users/
├── employees/
├── inventory/
├── attendance/
├── payroll/
├── dashboard/
├── prisma/
└── app.module.ts
```

## ⚙️ Installation

```bash
git clone <repository-url>
cd amdox-erp/apps/api
npm install
```

## 🔧 Environment Variables

Create a `.env` file and configure:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_secret_key
```

## ▶️ Run the Application

```bash
npm run start:dev
```

Server runs on:

```text
http://localhost:3000
```

## 📌 API Modules

* Auth APIs
* Employee APIs
* Inventory APIs
* Attendance APIs
* Payroll APIs
* Dashboard APIs

## 👨‍💻 Developed By

Sourabh Choudhari

Computer Science & Engineering
Vidya Vikas Institute of Engineering & Technology, Mysore
