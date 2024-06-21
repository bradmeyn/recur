"use client";

import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TableFooterCell,
} from "@tremor/react";

import { capitalise, formatAsCurrency } from "@/lib/utils";
import { type SubscriptionWithTotal } from "@/lib/types/data";
import { useContext } from "react";
import { FrequencyContext } from "../_context/FrequencyContext";
import SubscriptionEdit from "./SubscriptionEdit";
import SubscriptionDelete from "./SubscriptionDelete";
import Dropdown from "@/lib/components/Dropdown";
import { usePathname } from "next/navigation";

export default function SubscriptionTable({
  subscriptions,
  total,
}: {
  subscriptions: SubscriptionWithTotal[];
  total: number;
}) {
  const frequency = useContext(FrequencyContext);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong">
              Detail
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Amount
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Frequency
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Category
            </TableHeaderCell>
            <TableHeaderCell>{capitalise(frequency)} Total</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscriptions.map((subscription, i) => (
            <SubscriptionItem
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableFooterCell className=" font-bold text-tremor-content-strong">
              Total
            </TableFooterCell>
            <TableFooterCell></TableFooterCell>
            <TableFooterCell></TableFooterCell>
            <TableFooterCell></TableFooterCell>
            <TableFooterCell className="text-lg text-tremor-content-strong">
              {formatAsCurrency(total, true, true)}
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

function SubscriptionItem({
  subscription,
}: {
  subscription: SubscriptionWithTotal;
}) {
  const homeRoute = usePathname() === "/";

  return (
    <TableRow key={subscription.id}>
      <TableCell className="font-semibold text-tremor-content-strong text-md">
        {subscription.name}
      </TableCell>
      <TableCell>{formatAsCurrency(subscription.amount, true, true)}</TableCell>
      <TableCell>{capitalise(subscription.frequency)}</TableCell>
      <TableCell>{capitalise(subscription.category)}</TableCell>
      <TableCell className=" font-semibold ">
        {formatAsCurrency(subscription.total, true, true)}
      </TableCell>
      {!homeRoute ? (
        <TableCell className="flex gap-1">
          <SubscriptionEdit subscription={subscription} />
          <SubscriptionDelete id={subscription.id} />
        </TableCell>
      ) : null}
    </TableRow>
  );
}
