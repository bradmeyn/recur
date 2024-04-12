"use client";

import {
  Card,
  DonutChart,
  Legend,
  LineChart,
  LineChartProps,
  List,
  ListItem,
} from "@tremor/react";

import { formatAsCurrency, formatAsPercentage } from "@/lib/utils";
import { consolidateCategoryData } from "@/lib/utils";
import { type Income, type Expense, type Savings } from "@/lib/types/data";

export function CategoriesChart({
  data,
}: {
  data: (Income | Expense | Savings)[];
}) {
  // Use the consolidateCategoryData function to process the data
  const chartData = consolidateCategoryData(data);

  // Calculate total value for the legend
  const total = chartData.reduce((acc, item) => acc + item.total, 0);

  // Formatter function (assuming this is already defined somewhere)

  return (
    <div className="flex flex-col items-start gap-4">
      <DonutChart
        valueFormatter={(value: number) => formatAsCurrency(value)}
        data={chartData.map((item) => ({ name: item.name, value: item.total }))}
        colors={["emerald", "rose", "sky"]} // These colors may need to be valid CSS/tailwind class names
      />
      <List className="w-full">
        {chartData.map((item, i) => (
          <ListItem key={i} className="flex justify-between w-full py-2">
            <span className="flex items-center">
              <span
                className={`size-3 rounded inline-block mr-2 bg-indigo-${i}00`} // Ensure these classes correspond to actual colors
              />
              {item.name}
            </span>
            <span>
              {formatAsCurrency(item.total)} (
              <span>{formatAsPercentage(item.total / total)}</span>)
            </span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
