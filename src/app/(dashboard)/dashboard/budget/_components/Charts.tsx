"use client";

import {
  Card,
  DonutChart,
  Legend,
  LineChart,
  LineChartProps,
} from "@tremor/react";

import { formatAsCurrency } from "../../../../../../utils";

export function ExpenseChart() {
  return (
    <>
      {/* <DonutChart valueFormatter={formatAsCurrency} data={data} />
      <Legend categories={categories} className="p-4" /> */}
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
