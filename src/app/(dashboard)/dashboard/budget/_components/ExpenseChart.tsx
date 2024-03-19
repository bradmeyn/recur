"use client";

import { Card, DonutChart, Legend } from "@tremor/react";
import { EXPENSES, SUBSCRIPTIONS } from "@/app/data";
import { formatAsCurrency } from "@/lib/utils";

export default function ExpenseChart() {
  const allExpenses = [...EXPENSES, ...SUBSCRIPTIONS];
  const categories = allExpenses.map((s) => s.name);
  const data = allExpenses.map((e) => {
    return {
      name: e.name,
      value: e.cost,
    };
  });
  return (
    <>
      <DonutChart valueFormatter={formatAsCurrency} data={data} />
      <Legend categories={categories} className="p-4" />
    </>
  );
}
