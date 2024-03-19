"use client";
import { SUBSCRIPTIONS } from "@/app/data";
import { formatAsCurrency } from "@/lib/utils";

import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  DonutChart,
  Legend,
} from "@tremor/react";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-9">
        <SubscriptionTable />
      </div>
      <div className="col-span-12 sm:col-span-3">
        <SubscriptionCategoryChart />
      </div>
    </div>
  );
}

function SubscriptionTable() {
  return (
    <Card>
      <h2 className=" mb-4">Subscriptions</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Subscription</TableHeaderCell>
            <TableHeaderCell>Cost</TableHeaderCell>
            <TableHeaderCell>Frequency</TableHeaderCell>
            <TableHeaderCell>Payment Date</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SUBSCRIPTIONS.map((subscription) => (
            <TableRow key={subscription.id}>
              <TableCell>{subscription.name}</TableCell>
              <TableCell>{formatAsCurrency(subscription.cost)}</TableCell>
              <TableCell>{subscription.paymentFrequency}</TableCell>
              <TableCell>{subscription.paymentDate}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

function SubscriptionCategoryChart() {
  const categories = SUBSCRIPTIONS.map((s) => s.name);
  const formattedSubscriptions = SUBSCRIPTIONS.map((s) => ({
    name: s.name,
    value: s.cost,
  }));
  return (
    <Card className="flex flex-col justify-between h-full">
      <h2 className=" mb-4">Subscription by Category</h2>
      <DonutChart
        data={formattedSubscriptions}
        valueFormatter={formatAsCurrency}
      />
      <Legend categories={categories} className="p-4" />
    </Card>
  );
}
