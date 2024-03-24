import { Card } from "@tremor/react";

import { redirect } from "next/navigation";
import { getUser } from "@/services/user";
import { ExpenseTable, IncomeTable } from "./_components/Tables";
import { getIncome } from "@/services/income";
import { getExpenses } from "@/services/expenses";

export default async function BudgetPage() {
  const user = await getUser();
  if (!user) return redirect("/login");

  const income = await getIncome(user.id);
  const expenses = await getExpenses(user.id);

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8  ">
        <IncomeTable userId={user.id} income={income} />
      </Card>

      <Card className="col-span-12 lg:col-span-8 ">
        <ExpenseTable userId={user.id} expenses={expenses} />
      </Card>
    </div>
  );
}
