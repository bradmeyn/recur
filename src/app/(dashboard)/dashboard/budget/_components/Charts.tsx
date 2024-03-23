"use client";

import {
  Card,
  DonutChart,
  Legend,
  LineChart,
  LineChartProps,
} from "@tremor/react";
import { EXPENSES, SUBSCRIPTIONS } from "@/app/data";
import { formatAsCurrency } from "@/lib/utils";

export function ExpenseChart() {
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

export function SavingsChart() {
  const data = [
    { name: "Fixed", value: 2000 },
    { name: "Variable", value: 1500 },
  ];
  return (
    <>
      {/* <LineChart data={data} /> */}
      <Legend categories={["Fixed", "Variable"]} className="p-4" />
    </>
  );
}
