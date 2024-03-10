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
} from "@tremor/react";

import { type Income, INCOME, type Expense } from "@/app/data";
import { formatAsCurrency } from "@/app/utils";

export function IncomeTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Detail</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Frequency</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell className="text-right">Total</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {INCOME.map((income) => (
          <IncomeItem key={income.id} income={income} />
        ))}
      </TableBody>
    </Table>
  );
}

type IncomeItemProps = {
  income: Income;
};

function IncomeItem({ income }: IncomeItemProps) {
  const total = income.value * 26;
  return (
    <TableRow key={income.id}>
      <TableCell className="text-slate-900 font-semibold">
        {income.name}
      </TableCell>
      <TableCell>{formatAsCurrency(income.value)}</TableCell>
      <TableCell>{income.frequency}</TableCell>
      <TableCell>{income.category}</TableCell>
      <TableCell className=" font-semibold text-right">
        {formatAsCurrency(total)}
      </TableCell>
    </TableRow>
  );
}

export function ExpenseTable({ expenses }: { expenses: Expense[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Detail</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Frequency</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </TableBody>
    </Table>
  );
}

type ExpenseItemProps = {
  expense: Expense;
};

function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <TableRow key={expense.id}>
      <TableCell>{expense.name}</TableCell>
      <TableCell>{formatAsCurrency(expense.cost)}</TableCell>
      <TableCell>{expense.frequency}</TableCell>
      <TableCell>
        <Badge color="red">{expense.category}</Badge>
      </TableCell>
    </TableRow>
  );
}

export function SavingsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Detail</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Frequency</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {INCOME.map((income) => (
          <IncomeItem key={income.id} income={income} />
        ))}
      </TableBody>
    </Table>
  );
}
