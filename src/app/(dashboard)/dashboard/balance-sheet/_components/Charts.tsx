"use client";

import { formatAsCurrency, formatAsShortCurrency } from "@/lib/utils";
import { DonutChart, List, ListItem } from "@tremor/react";

export function NetWorthBar({
  assetsValue,
  liabilitiesValue,
}: {
  assetsValue: number;
  liabilitiesValue: number;
}) {
  const total = assetsValue - liabilitiesValue;

  return (
    <>
      <div className="flex flex-col mb-4">
        <p className="text-tremor-default text-tremor-content">Net Worth</p>
        <span className="text-tremor-metric font-semibold text-tremor-content-strong">
          {formatAsCurrency(total, false, true)}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded h-2.5 flex overflow-hidden">
        <div className="bg-emerald-500 h-2.5 w-[75%] "></div>
        <div className="bg-rose-500 h-2.5 w-[25%]"></div>
      </div>

      <div className="mt-4">
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <span className="size-3 rounded inline-block bg-emerald-500"></span>
            <p className="flex items-baseline gap-1">
              <span className="font-semibold">
                {" "}
                {formatAsShortCurrency(assetsValue)}
              </span>
              <span className="text-tremor-default text-tremor-content">
                Assets
              </span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <span className="size-3 rounded inline-block bg-rose-500"></span>
            <p className="flex items-baseline gap-1">
              <span className="font-semibold">
                {formatAsShortCurrency(liabilitiesValue)}
              </span>
              <span className="text-tremor-default text-tremor-content">
                Liabilities
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Chart() {
  const data = [
    { name: "Income", value: 15730 },
    { name: "Expenses", value: 4420 },
    { name: "Savings", value: 3920 },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div>
      <DonutChart
        valueFormatter={formatAsCurrency}
        data={data}
        colors={["emerald", "rose", "sky"]}
      />
      <List className="w-full">
        {data.map((item, index) => (
          <ListItem key={index} className="flex justify-between w-full py-2">
            <span className="flex items-center">
              <span
                className={`size-3 rounded inline-block mr-2 ${getColor(
                  index
                )}`}
              />
              {item.name}
            </span>
            <span>{formatAsCurrency(item.value, false, true)}</span>
          </ListItem>
        ))}
        {/* <ListItem className="flex justify-between w-full py-2 font-bold">
          <span>Total</span>
          <span>{formatAsCurrency(total, false, true)}</span>
        </ListItem> */}
      </List>
    </div>
  );
}

function getColor(index: number) {
  // This function should return a color class based on the category
  // Modify this function based on the actual color classes you have.
  const colors = ["bg-emerald-500", "bg-rose-500", "bg-sky-500"];
  return colors[index] || "bg-gray-500";
}
