import { redirect } from "next/navigation";
import { getUser } from "@/lib/services/user";

import { getIncome } from "@/lib/services/income";
import { getExpenses } from "@/lib/services/expenses";
import { BudgetTabs } from "./_components/BudgetTabs";

export default async function BudgetPage() {
  const user = await getUser();
  if (!user) return redirect("/login");

  const income = await getIncome(user.id);
  const expenses = await getExpenses(user.id);

  return (
    <>
      <BudgetTabs
        income={income}
        expenses={expenses}
        savings={[]}
        userId={user.id}
      />
    </>
  );
}
