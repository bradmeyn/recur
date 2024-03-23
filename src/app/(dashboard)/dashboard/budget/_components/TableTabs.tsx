"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { IncomeTable } from "./Tables";

export default function TableTabs() {
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
            <IncomeTable income={[]} />
          </TabPanel>
          <TabPanel>
            <p className="mt-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Diam nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr.
            </p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
