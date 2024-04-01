"use client";

import { Card, ProgressCircle } from "@tremor/react";

export function SavingsRateCard() {
  return (
    <Card className="col-span-12 lg:col-span-3">
      <div className="flex gap-4">
        <ProgressCircle value={50} />
        <div>
          <p className="tremor-background-muted text-sm">Savings Rate</p>
          <p className="text-3xl font-semibold">40%</p>
        </div>
      </div>
    </Card>
  );
}

export function HeaderCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="col-span-12  lg:col-span-3">
      <h2 className="text-sm font-medium">{label}</h2>
      <p className="text-3xl font-semibold">{value}</p>
    </Card>
  );
}
