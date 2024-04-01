import { Card } from "@tremor/react";
import { type Asset, type Liability, TabbedTables } from "./_components/Tables";
import { Chart, NetWorthBar } from "./_components/Charts";

export default function BalanceSheetPage() {
  const assets: Asset[] = [
    { id: 1, name: "Kings Road House", type: "Real Estate", value: 1100000 },
    { id: 5, name: "Share Portfolio", type: "Investments", value: 1120000 },
    { id: 2, name: "Kia Cerato", type: "Cars", value: 20000 },
    { id: 3, name: "Savings Account", type: "Cash", value: 12000 },
    { id: 4, name: "Superannuation", type: "Retirement", value: 20000 },
  ];

  const liabilities: Liability[] = [
    {
      id: 1,
      name: "Kings Road Home Loan",
      provider: "Ubank",
      interestRate: 0.02,
      value: 300000,
    },
    {
      id: 2,
      name: "HELP Debt",
      provider: "ATO",
      interestRate: 0.01,
      value: 20000,
    },
  ];
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 ">
          <NetWorthBar assetsValue={1240000} liabilitiesValue={450000} />
        </Card>

        <TabbedTables assets={assets} liabilities={liabilities} />
      </div>
    </div>
  );
}
