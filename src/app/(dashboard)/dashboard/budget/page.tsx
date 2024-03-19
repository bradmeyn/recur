import { Card, ProgressCircle } from "@tremor/react";
import { IncomeTable, ExpenseTable } from "./_components/Tables";
import ExpenseChart from "./_components/ExpenseChart";
import { EXPENSES, Income } from "@/app/data";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function BudgetPage() {
  const fixedExpenses = EXPENSES.filter((e) => e.type === "Fixed");
  const variableExpenses = EXPENSES.filter((e) => e.type === "Variable");

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: income } = await supabase
    .from<string, Income>("income")
    .select("*")
    .eq("user_id", user?.id);

  return (
    <>
      <div>
        <Card className="col-span-12 md:col-span-6 lg:col-span-4">
          <IncomeTable income={income} />
        </Card>

        {/* <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Variable Expenses</h2>
          <ExpenseTable expenses={variableExpenses} />
        </Card>

        <Card className="col-span-12 md:col-span-6 lg:col-span-6">
          <h2>Fixed Expenses</h2>
          <ExpenseTable expenses={fixedExpenses} />
        </Card> */}
      </div>
    </>
  );
}
