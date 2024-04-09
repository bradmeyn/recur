import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supabudget | Budget",
  description: "Your budget overview.",
};

export default async function BudgetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full max-w-[1200px]">{children}</div>;
}
