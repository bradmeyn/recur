import { BarChart, Card, BarChartProps } from "@tremor/react";

export default function ProjectedSavings() {
  return (
    <div>
      <h2>Projected Savings</h2>
      <p>50000</p>
      <BarChart
        index="name"
        data={[
          { name: "January", value: 1000 },
          { name: "February", value: 2000 },
          { name: "March", value: 3000 },
          { name: "April", value: 4000 },
          { name: "May", value: 5000 },
          { name: "June", value: 6000 },
          { name: "July", value: 7000 },
          { name: "August", value: 8000 },
          { name: "September", value: 9000 },
          { name: "October", value: 10000 },
          { name: "November", value: 11000 },
          { name: "December", value: 12000 },
        ]}
        categories={[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]}
      />
    </div>
  );
}
