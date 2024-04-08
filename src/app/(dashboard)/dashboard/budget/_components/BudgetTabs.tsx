"use client";
import { useState, createContext, useContext } from "react";

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
  Frequency,
} from "@/types/data";
import { IncomeTable, ExpensesTable, SavingsTable } from "./Tables";
import { CategoriesChart } from "./Charts";
import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { RiCalendarLine } from "@remixicon/react";
import { FrequencyContext } from "../_context/FrequencyContext";

export function BudgetTabs({
  income,
  expenses,
  savings,
}: {
  income: Income[];
  expenses: Expense[];
  savings: Savings[];
  userId: string;
}) {
  const [frequency, setFrequency] = useState<Frequency>(
    FREQUENCY_OPTIONS[6].value
  );

  return (
    <div>
      <TabGroup className="col-span-12">
        <TabList>
          <Tab className="text-xl">Income</Tab>
          <Tab className="text-xl">Expenses</Tab>
          <Tab className="text-xl">Savings</Tab>
        </TabList>
        <Select
          icon={RiCalendarLine}
          className="w-[100px] mt-5"
          //@ts-ignore
          value={frequency}
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
              <IncomePanel income={income} />
            </TabPanel>
            <TabPanel>
              <ExpensesPanel expenses={expenses} />
            </TabPanel>
            <TabPanel>
              <SavingsPanel savings={savings} />
            </TabPanel>
          </TabPanels>
        </FrequencyContext.Provider>
      </TabGroup>
    </div>
  );
}

function IncomePanel({ income }: { income: Income[] }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <IncomeTable income={income} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        <CategoriesChart data={income} />
      </Card>
    </div>
  );
}

function ExpensesPanel({ expenses }: { expenses: Expense[] }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <ExpensesTable expenses={expenses} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        {/* <ExpensesChart /> */}
      </Card>
    </div>
  );
}

function SavingsPanel({ savings }: { savings: Savings[] }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-12 lg:col-span-8">
        <SavingsTable savings={savings} />
      </Card>

      <Card className="col-span-12 lg:col-span-4 gap-4">
        {/* <SavingsChart /> */}
      </Card>
    </div>
  );
}
