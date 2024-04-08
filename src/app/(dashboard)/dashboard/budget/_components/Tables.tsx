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

import { formatAsCurrency, frequencyTotal, capitalise } from "@/lib/utils";
import { type Income, type Expense, type Savings } from "@/types/data";
import { useContext } from "react";
import { FrequencyContext } from "../_context/FrequencyContext";

export function IncomeTable({ income }: { income: Income[] }) {
  const frequency = useContext(FrequencyContext);

  const frequencyTotals = income.map((i) =>
    frequencyTotal(i.frequency, frequency, i.amount)
  );

  const total = frequencyTotals.reduce((acc, curr) => acc + curr, 0);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Income</h2>
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
            <IncomeItem
              key={income.id}
              income={income}
              total={frequencyTotals[i]}
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

function IncomeItem({ income, total }: { income: Income; total: number }) {
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
        {formatAsCurrency(total, false, true)}
      </TableCell>
    </TableRow>
  );
}

export function ExpensesTable({ expenses }: { expenses: Expense[] }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Expenses</h2>
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
          {expenses.map((e) => (
            <ExpenseItem key={e.id} expense={e} />
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

function ExpenseItem({ expense }: { expense: Expense }) {
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

export function SavingsTable({ savings }: { savings: Savings[] }) {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2>Savings</h2>
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
          {savings.map((s) => (
            <SavingsItem key={s.id} saving={s} />
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

function SavingsItem({ saving }: { saving: Savings }) {
  return (
    <TableRow key={saving.id}>
      <TableCell className="font-medium text-tremor-content-strong">
        {saving.name}
      </TableCell>
      <TableCell>{formatAsCurrency(saving.amount)}</TableCell>
      <TableCell>{saving.frequency}</TableCell>
      <TableCell>{saving.category}</TableCell>
      <TableCell className=" font-semibold text-right">
        {/* {formatAsCurrency(total)} */}
      </TableCell>
    </TableRow>
  );
}
