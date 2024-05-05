"use client";
import { useState, useContext } from "react";
import { frequencyTotal } from "@/lib/utils";
import { Card, Select, SelectItem } from "@tremor/react";

import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { RiCalendarLine } from "@remixicon/react";
import { FrequencyContext } from "../_context/FrequencyContext";

import { Subscription, Frequency } from "@/lib/types/data";
import SubscriptionTable from "./SubscriptionTable";
import CategoriesChart from "./CategoriesChart";

export default function SubscriptionPanel({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  const [frequency, setFrequency] = useState<Frequency>(
    FREQUENCY_OPTIONS[3].value
  );

  // Calculate the total for the selected frequency
  const totalledSubscriptions = subscriptions.map((subscription) => ({
    ...subscription,
    total: frequencyTotal(
      subscription.frequency,
      frequency,
      subscription.amount
    ),
  }));

  // Calculate the total value of all subscriptions
  const total = totalledSubscriptions.reduce(
    (acc, subscription) => acc + subscription.total,
    0
  );

  return (
    <>
      <div className="mb-4">
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
      </div>
      <FrequencyContext.Provider value={frequency}>
        <div className="grid grid-cols-12 gap-4">
          <Card className="col-span-12 lg:col-span-8 h-fit">
            <SubscriptionTable
              subscriptions={totalledSubscriptions}
              total={total}
            />
          </Card>

          <Card className="col-span-12 lg:col-span-4 gap-4">
            <h2>Overview</h2>
            <CategoriesChart
              subscriptions={totalledSubscriptions}
              total={total}
            />
          </Card>
        </div>
      </FrequencyContext.Provider>
    </>
  );
}
