import type { Metadata } from "next";

import { Tab } from "@tremor/react";
import TabLinks from "@/components/TabLinks";

export const metadata: Metadata = {
  title: "Supabudget | Budget",
  description: "Your budget overview.",
};

export default async function BudgetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full sm:p-10 max-w-[1200px]">
      <TabLinks
        links={[
          { href: "/dashboard/budget", label: "Overview" },
          { href: "/dashboard/budget/income", label: "Income" },
          { href: "/dashboard/budget/expenses", label: "Expenses" },
          { href: "/dashboard/budget/savings", label: "Savings" },
        ]}
      />
      {children}
    </div>
  );
}
