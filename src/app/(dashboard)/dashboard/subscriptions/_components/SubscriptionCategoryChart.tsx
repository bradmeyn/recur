"use client";

import { DonutChart, Card, Legend } from "@tremor/react";
import { formatAsCurrency } from "@/app/utils";

type formattedSubscription = {
  name: string;
  value: number;
};

type Props = {
  subscriptions: formattedSubscription[];
};

export default function SubscriptionCategoryChart({ subscriptions }: Props) {
  const categories = subscriptions.map((s) => s.name);
  return (
    <Card className="h-full flex flex-col justify-between">
      <h2 className="text-md text-slate-500 font-semibold mb-4">
        Subscription by Category
      </h2>
      <DonutChart data={subscriptions} valueFormatter={formatAsCurrency} />

      <Legend categories={categories} className="p-4" />
    </Card>
  );
}
