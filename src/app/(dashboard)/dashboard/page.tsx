"use client";

import { Card, ProgressCircle } from "@tremor/react";

export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-12  gap-4 mb-4">
        <Card className="col-span-12  lg:col-span-3">
          <div className="flex gap-4">
            <ProgressCircle value={50} />
            <div>
              <h2>Savings Rate</h2>
              <p className="text-3xl font-semibold">40%</p>
            </div>
          </div>
        </Card>

        <Card className="col-span-12  lg:col-span-3">
          <h2>Something</h2>
          <p className="text-3xl font-semibold">$1,000</p>
        </Card>

        <Card className="col-span-12  lg:col-span-3">
          <h2>Something</h2>
          <p className="text-3xl font-semibold">$1,000</p>
        </Card>

        <Card className="col-span-12  lg:col-span-3">
          <h2>Something</h2>
          <p className="text-3xl font-semibold">$1,000</p>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
        <Card className="col-span-12 md:col-span-5">
          <h2>Expense Overview</h2>
        </Card>
      </div>

      <div className="grid grid-cols-12  gap-4 ">
        <Card className="col-span-12 md:col-span-6">
          <h2>Networth</h2>
        </Card>
        <Card className="col-span-12 md:col-span-6">
          <h2>Upcoming Payments</h2>
        </Card>
      </div>
    </div>
  );
}
