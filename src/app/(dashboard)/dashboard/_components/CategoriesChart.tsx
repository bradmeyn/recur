"use client";

import { DonutChart, List, ListItem } from "@tremor/react";

import { capitalise, formatAsCurrency, formatAsPercentage } from "@/lib/utils";
import { consolidateCategoryData } from "@/lib/utils";
import { SubscriptionWithTotal, type Subscription } from "@/lib/types/data";

export default function CategoriesChart({
  subscriptions,
  total,
}: {
  subscriptions: SubscriptionWithTotal[];
  total: number;
}) {
  // Use the consolidateCategoryData function to process the data
  const chartData = consolidateCategoryData(subscriptions);

  // Formatter function (assuming this is already defined somewhere)

  return (
    <div className="flex flex-col items-start gap-4">
      <DonutChart
        valueFormatter={(value: number) => formatAsCurrency(value, true, true)}
        data={chartData.map((item) => ({
          name: capitalise(item.name),
          value: item.total,
        }))}
        colors={["emerald", "rose", "sky"]} // These colors may need to be valid CSS/tailwind class names
      />
      <List className="w-full">
        {chartData.map((item, i) => (
          <ListItem key={i} className="flex justify-between w-full py-2">
            <span className="flex items-center">
              <span
                className={`size-3 rounded inline-block mr-2 bg-indigo-${i}00`} // Ensure these classes correspond to actual colors
              />
              {capitalise(item.name)}
            </span>
            <span>
              {formatAsCurrency(item.total, true, true)} (
              <span>{formatAsPercentage(item.total / total)}</span>)
            </span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
