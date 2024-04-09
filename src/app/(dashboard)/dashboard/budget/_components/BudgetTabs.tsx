"use client";
import { useState, useContext } from "react";
import { frequencyTotal } from "@/lib/utils";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  Select,
  SelectItem,
} from "@tremor/react";

import {
  type Income,
  type Expense,
  type Savings,
  type Frequency,
  type IncomeWithTotal,
  type ExpenseWithTotal,
  type SavingsWithTotal,
} from "@/types/data";
import { IncomeTable, ExpensesTable, SavingsTable } from "./Tables";
import { CategoriesChart } from "./Charts";
import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { RiCalendarLine } from "@remixicon/react";
import { FrequencyContext } from "../_context/FrequencyContext";
import { AddExpense, AddIncome } from "./AddItems";

export function BudgetTabs({
  income,
  expenses,
  savings,
}: {
  income: Income[];
  expenses: Expense[];
  savings: Savings[];
}) {
  const [frequency, setFrequency] = useState<Frequency>(
    FREQUENCY_OPTIONS[6].value
  );

  return (
    <div>
      <TabGroup className="col-span-12">
        <TabList>
          <Tab className="text-sm">Income</Tab>
          <Tab className="text-sm">Expenses</Tab>
          <Tab className="text-sm">Savings</Tab>
        </TabList>
        <Select
          icon={RiCalendarLine}
          className="w-[100px] mt-5"
          value={frequency}
          //@ts-ignore
          onValueChange={setFrequency}
        >
          {FREQUENCY_OPTIONS.map((option) =>
            option.value === frequency ? (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ) : (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            )
          )}
        </Select>
        <FrequencyContext.Provider value={frequency}>
          <TabPanels>
            <TabPanel>
              {income.length > 0 ? (
                <IncomePanel income={income} />
              ) : (
                <Card className="col-span-12 lg:col-span-8">
                  <p className="text-center text-tremor-content">
                    No income items found. Add an income item to get started.
                  </p>
                  <AddIncome />
                </Card>
              )}
            </TabPanel>
            <TabPanel>
              {expenses.length > 0 ? (
                <ExpensesPanel expenses={expenses} />
              ) : (
                <Card className="col-span-12 lg:col-span-8">
                  <p className="text-center text-tremor-content">
                    No expense items found. Add an expense item to get started.
                  </p>
                  <AddExpense />
                </Card>
              )}
            </TabPanel>
            <TabPanel>
              {savings.length > 0 ? (
                <SavingsPanel savings={savings} />
              ) : (
                <Card className="col-span-12 lg:col-span-8">
                  <p className="text-center text-tremor-content">
                    No savings items found. Add a savings item to get started.
                  </p>
                </Card>
              )}
            </TabPanel>
          </TabPanels>
        </FrequencyContext.Provider>
      </TabGroup>
    </div>
  );
}

function IncomePanel({ income }: { income: Income[] }) {
  const frequency = useContext(FrequencyContext);

  const totalledIncome: IncomeWithTotal[] = income.map((income) => {
    return {
      ...income,
      total: frequencyTotal(income.frequency, frequency, income.amount),
    };
  });

  const total = totalledIncome.reduce((acc, income) => acc + income.total, 0);

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <IncomeTable income={totalledIncome} total={total} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        <CategoriesChart data={income} />
      </Card>
    </div>
  );
}

function ExpensesPanel({ expenses }: { expenses: Expense[] }) {
  const frequency = useContext(FrequencyContext);

  const totalledExpenses = expenses.map((expense) => ({
    ...expense,
    total: frequencyTotal(expense.frequency, frequency, expense.amount),
  }));

  const totalExpenses = totalledExpenses.reduce(
    (acc, expense) => acc + expense.total,
    0
  );

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <ExpensesTable expenses={totalledExpenses} total={totalExpenses} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        {/* Implement ExpensesChart here if needed, possibly using totalledExpenses for data */}
      </Card>
    </div>
  );
}

function SavingsPanel({ savings }: { savings: Savings[] }) {
  const frequency = useContext(FrequencyContext);

  const totalledSavings = savings.map((saving) => ({
    ...saving,
    total: frequencyTotal(saving.frequency, frequency, saving.amount),
  }));

  const totalSavings = totalledSavings.reduce(
    (acc, saving) => acc + saving.total,
    0
  );

  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <SavingsTable savings={totalledSavings} total={totalSavings} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        {/* Implement SavingsChart here if needed, possibly using totalledSavings for data */}
      </Card>
    </div>
  );
}
