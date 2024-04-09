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
} from "@/types/data";
import { useContext } from "react";
import { FrequencyContext } from "../_context/FrequencyContext";
import { AddExpense, AddIncome } from "./AddItems";
import { RiPencilLine, RiDeleteBinLine } from "@remixicon/react";
import { DeleteItem } from "./DeleteItem";
import { EditIncome } from "./EditItems";

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

export function ExpensesTable({
  expenses,
  total,
}: {
  expenses: Expense[];
  total: number;
}) {
  const frequency = useContext(FrequencyContext);

  const totalledExpenses = expenses.map((expense) => ({
    ...expense,
    total: frequencyTotal(expense.frequency, frequency, expense.amount),
  }));

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Expenses</h2>
        <AddExpense />
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
          {totalledExpenses.map((expense) => (
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
            <TableFooterCell className="text-lg text-tremor-content-strong">
              {formatAsCurrency(total, false, true)}
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

function ExpenseItem({ expense }: { expense: ExpenseWithTotal }) {
  return (
    <TableRow>
      <TableCell className="font-semibold text-tremor-content-strong text-md">
        {expense.name}
      </TableCell>
      <TableCell>{formatAsCurrency(expense.amount, false, true)}</TableCell>
      <TableCell>{expense.frequency}</TableCell>
      <TableCell>{expense.category}</TableCell>
      <TableCell className=" font-semibold">
        {formatAsCurrency(expense.total, false, true)}
      </TableCell>
      <TableCell className="flex gap-4">
        <button className="hover:text-tremor-brand p-2 hover:bg-slate-200 rounded">
          <RiPencilLine size={20} />
        </button>

        <DeleteItem id={expense.id} type="expense" />
      </TableCell>
    </TableRow>
  );
}

export function SavingsTable({
  savings,
  total,
}: {
  savings: Savings[];
  total: number;
}) {
  const frequency = useContext(FrequencyContext);

  const totalledSavings = savings.map((saving) => ({
    ...saving,
    total: frequencyTotal(saving.frequency, frequency, saving.amount),
  }));

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Savings</h2>
      </div>
      <Table>
        <TableHead>{/* TableHeaderCells */}</TableHead>
        <TableBody>
          {totalledSavings.map((saving) => (
            <SavingsItem key={saving.id} saving={saving} />
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            {/* TableFooterCells for column labels */}
            <TableFooterCell className="text-lg text-tremor-content-strong">
              {formatAsCurrency(total, false, true)}
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

function SavingsItem({ saving }: { saving: SavingsWithTotal }) {
  return (
    <TableRow>
      {/* TableCell contents for each saving detail */}
      <TableCell className=" font-semibold text-right">
        {formatAsCurrency(saving.total, false, true)}
      </TableCell>
    </TableRow>
  );
}
