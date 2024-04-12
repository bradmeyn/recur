"use client";
import { useState, useContext } from "react";
import { frequencyTotal } from "@/lib/utils";
import { Card, Select, SelectItem } from "@tremor/react";

import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { RiCalendarLine } from "@remixicon/react";
import { FrequencyContext } from "../_context/FrequencyContext";

import { Subscription, Frequency } from "@/lib/types/data";

export default function SubscriptionPanel({
  subscriptions,
}: {
  subscriptions: Subscription[];
}) {
  const [frequency, setFrequency] = useState<Frequency>(
    FREQUENCY_OPTIONS[3].value
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
          <Card className="col-span-12 lg:col-span-8">Table</Card>

          <Card className="col-span-12 lg:col-span-4 gap-4">Chart</Card>
        </div>
      </FrequencyContext.Provider>
    </>
  );
}
