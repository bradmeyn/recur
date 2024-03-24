"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { IncomeTable } from "./Tables";
import { Income } from "@/types/data";

export default function TableTabs({
  userId,
  income,
}: {
  userId: string;
  income: Income[];
}) {
  return (
    <div>
      <TabGroup>
        <TabList className="mt-4">
          <Tab>Income</Tab>
          <Tab>Expenses</Tab>
          <Tab>Savings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <IncomeTable userId={userId} income={income} />
          </TabPanel>
          <TabPanel>
            <h1>Expenses</h1>
          </TabPanel>
          <TabPanel>
            <h1>Savings</h1>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
