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
import { type Income, type Expense, type Savings } from "@/types/data";
import { formatAsCurrency } from "../../../../../../utils";
import { AddExpense, AddIncome } from "./AddItems";

type IncomeProps = {
  userId: string;
  income: Income[];
};

export function IncomeTable({ income, userId }: IncomeProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Income</h2>
        <AddIncome userId={userId} />
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
            <TableFooterCell className="text-lg text-tremor-content-strong"></TableFooterCell>
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
        {income.name}
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

type ExpenseProps = {
  userId: string;
  expenses: Expense[];
};

export function ExpenseTable({ expenses, userId }: ExpenseProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Expenses</h2>
        <AddExpense userId={userId} />
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
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
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
            <TableFooterCell className="text-lg text-tremor-content-strong"></TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

type ExpenseItemProps = {
  expense: Expense;
};

function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <TableRow key={expense.id}>
      <TableCell className="font-medium text-tremor-content-strong">
        {expense.name}
      </TableCell>
      <TableCell>{formatAsCurrency(expense.amount)}</TableCell>
      <TableCell>{expense.frequency}</TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell className=" font-semibold text-right">
        {/* {formatAsCurrency(total)} */}
      </TableCell>
    </TableRow>
  );
}
