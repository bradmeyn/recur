"use client";

import { Card, ProgressCircle } from "@tremor/react";

export default function HeaderCards() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 mb-4">
      <Card className="col-span-12  lg:col-span-3">
        <div className="flex gap-4">
          <ProgressCircle value={50} />
          <div>
            <h2>Savings Rate</h2>
            <p className="text-3xl font-semibold">40%</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function HeaderCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="col-span-12  lg:col-span-3">
      <h2 className="text-sm font-medium">{label}</h2>
      <p className="text-3xl font-semibold">{value}</p>
    </Card>
  );
}
