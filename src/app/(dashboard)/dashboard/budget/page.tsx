"use client";
import { Card, ProgressCircle } from "@tremor/react";
import { IncomeTable, ExpenseTable } from "./_components/Tables";
import ExpenseChart from "./_components/ExpenseChart";
import { EXPENSES } from "@/app/data";

export default function BudgetPage() {
  const fixedExpenses = EXPENSES.filter((e) => e.type === "Fixed");
  const variableExpenses = EXPENSES.filter((e) => e.type === "Variable");

  return (
    <>
      <div>
        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Income</h2>
          <IncomeTable />
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Variable Expenses</h2>
          <ExpenseTable expenses={variableExpenses} />
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Fixed Expenses</h2>
          <ExpenseTable expenses={fixedExpenses} />
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Savings</h2>
        </Card>
      </div>
    </>
  );
}
