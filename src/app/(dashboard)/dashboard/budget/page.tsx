"use client";
import { Card, ProgressCircle } from "@tremor/react";
import IncomeTable from "./_components/IncomeTable";
import ExpenseChart from "./_components/ExpenseChart";

export default function BudgetPage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        <Card className="col-span-12  lg:col-span-3">
          <div className="flex gap-4">
            <ProgressCircle value={50} />
            <div>
              <h2 className="text-sm font-normal">Savings Rate</h2>
              <p className="text-3xl font-semibold">40%</p>
            </div>
          </div>
        </Card>

        <Card className="col-span-12">
          <h2>Income</h2>
          <IncomeTable />
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Variable Expenses</h2>
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Fixed Expenses</h2>
        </Card>

        <Card className="col-span-12">
          <h2>Savings</h2>
        </Card>

        <Card className="col-span-12 lg:col-span-4">
          <h2>Expense Breakdown</h2>
          <ExpenseChart />
        </Card>
      </div>
    </>
  );
}
