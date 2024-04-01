import type { Metadata } from "next";

import TabLinks from "@/components/TabLinks";

export const metadata: Metadata = {
  title: "Supabudget | Balance Sheet",
  description: "Your budget overview.",
};

export default async function BudgetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full sm:py-10 max-w-[1200px]">{children}</div>;
}
