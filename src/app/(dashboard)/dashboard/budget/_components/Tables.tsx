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

import { formatAsCurrency } from "@/lib/utils";
import { type Income, type Expense, type Savings } from "@/types/data";

export function IncomeTable({ income }: { income: Income[] }) {
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

function IncomeItem({ income }: { income: Income }) {
  return (
    <TableRow key={income.id}>
      <TableCell className="font-semibold text-tremor-content-strong text-md">
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
