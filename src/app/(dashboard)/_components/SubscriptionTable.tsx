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
  type Income,
  type Expense,
  type Savings,
  type IncomeWithTotal,
  type ExpenseWithTotal,
  type SavingsWithTotal,
} from "@/lib/types/data";
import { useContext } from "react";
import { FrequencyContext } from "../_context/FrequencyContext";
import { AddExpense, AddIncome } from "./SubscriptionAdd";
import { RiPencilLine, RiDeleteBinLine } from "@remixicon/react";

export function IncomeTable({
  income,
  total,
}: {
  income: IncomeWithTotal[];
  total: number;
}) {
  const frequency = useContext(FrequencyContext);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Income</h2>
        <AddIncome />
      </div>
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
          {income.map((income, i) => (
            <IncomeItem key={income.id} income={income} />
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

function IncomeItem({ income }: { income: IncomeWithTotal }) {
  const frequency = useContext(FrequencyContext);

  return (
    <TableRow key={income.id}>
      <TableCell className="font-semibold text-tremor-content-strong text-md">
        {income.name}
      </TableCell>
      <TableCell>{formatAsCurrency(income.amount, false, true)}</TableCell>
      <TableCell>{income.frequency}</TableCell>
      <TableCell>{income.category}</TableCell>
      <TableCell className=" font-semibold ">
        {formatAsCurrency(income.total, false, true)}
      </TableCell>
      <TableCell className="flex gap-2">
        <EditIncome income={income} />

        <DeleteItem id={income.id} type="income" />
      </TableCell>
    </TableRow>
  );
}
