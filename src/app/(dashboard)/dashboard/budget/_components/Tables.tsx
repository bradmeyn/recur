import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Badge,
  Tab,
  TableFoot,
  TableFooterCell,
} from "@tremor/react";
import { type Income, INCOME, type Expense } from "@/app/data";
import { formatAsCurrency } from "@/lib/utils";
import { AddIncome } from "./AddItems";

type Props = {
  income: Income[];
};

export function IncomeTable({ income }: Props) {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-slate-700">Income</h2>
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
          {income.map((income) => (
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
              $100
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

type IncomeItemProps = {
  income: Income;
};

function IncomeItem({ income }: IncomeItemProps) {
  return (
    <TableRow key={income.id}>
      <TableCell className="font-medium text-tremor-content-strong">
        {income.detail}
      </TableCell>
      <TableCell>{formatAsCurrency(income.amount)}</TableCell>
      <TableCell>{income.frequency}</TableCell>
      <TableCell>{income.category}</TableCell>
      <TableCell className=" font-semibold text-right">
        {/* {formatAsCurrency(total)} */}
      </TableCell>
    </TableRow>
  );
}
