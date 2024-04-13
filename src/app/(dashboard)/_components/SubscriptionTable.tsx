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

import { formatAsCurrency, frequencyTotal } from "@/lib/utils";
import {
  type Subscription,
  type SubscriptionWithTotal,
} from "@/lib/types/data";
import { useContext } from "react";
import { FrequencyContext } from "../_context/FrequencyContext";
import SubscriptionAdd from "./SubscriptionAdd";
import SubscriptionEdit from "./SubscriptionEdit";
import SubscriptionDelete from "./SubscriptionDelete";
import { RiPencilLine, RiDeleteBinLine } from "@remixicon/react";

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
      <div className="flex items-center justify-between mb-6"></div>
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
            <TableHeaderCell>Total</TableHeaderCell>
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
              {formatAsCurrency(total, false, true)}
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
  const frequency = useContext(FrequencyContext);

  return (
    <TableRow key={subscription.id}>
      <TableCell className="font-semibold text-tremor-content-strong text-md">
        {subscription.name}
      </TableCell>
      <TableCell>
        {formatAsCurrency(subscription.amount, false, true)}
      </TableCell>
      <TableCell>{subscription.frequency}</TableCell>
      <TableCell>{subscription.category}</TableCell>
      <TableCell className=" font-semibold ">
        {formatAsCurrency(subscription.total, false, true)}
      </TableCell>
      <TableCell className="flex gap-2">
        <SubscriptionEdit subscription={subscription} />

        <SubscriptionDelete id={subscription.id} />
      </TableCell>
    </TableRow>
  );
}
