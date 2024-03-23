import { Card, ProgressCircle } from "@tremor/react";
import HeaderCards from "./_components/HeaderCards";
import { ExpenseChart } from "./_components/Charts";
import { EXPENSES, Income } from "@/app/data";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import TableTabs from "./_components/TableTabs";

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
    <div className="grid grid-cols-12 gap-8">
      <HeaderCards />

      <Card className="col-span-12  lg:col-span-8">
        <TableTabs />
      </Card>

      <Card className="col-span-12  lg:col-span-4">
        <ExpenseChart />
      </Card>
    </div>
  );
}
