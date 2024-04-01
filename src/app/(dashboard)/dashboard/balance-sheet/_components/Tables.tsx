import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  TableFoot,
  TableFooterCell,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Card,
} from "@tremor/react";

import { formatAsCurrency } from "@/lib/utils";
import { Chart } from "./Charts";

type Asset = {
  id: string;
  name: string;
  type: string;
  value: number;
};

type Liability = {
  id: string;
  name: string;
  type: string;
  interestRate: number;
  provider: string;
  value: number;
};

export function TabbedTables({
  assets,
  liabilities,
}: {
  assets: Asset[];
  liabilities: Liability[];
}) {
  return (
    <TabGroup className="col-span-12">
      <TabList>
        <Tab className="text-xl">Assets</Tab>
        <Tab className="text-xl">Liabilities</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-12 lg:col-span-8">
              <AssetsTable assets={assets} />
            </Card>

            <Card className="col-span-12 lg:col-span-4 gap-4">
              <Chart />
            </Card>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-12 lg:col-span-8">
              <LiabilitiesTable liabilities={liabilities} />
            </Card>

            <Card className="col-span-12 lg:col-span-4">
              <Chart />
            </Card>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function AssetsTable({ assets }: { assets: Asset[] }) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong">
              Asset
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Type
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong text-right">
              Value
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((a) => (
            <AssetTableRow key={a.id} asset={a} />
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableFooterCell className=" font-bold text-tremor-content-strong">
              Total
            </TableFooterCell>
            <TableFooterCell></TableFooterCell>
            <TableFooterCell className="text-lg text-right text-tremor-content-strong">
              {formatAsCurrency(
                assets.reduce((acc, asset) => acc + asset.value, 0)
              )}
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

function AssetTableRow({ asset }: { asset: Asset }) {
  return (
    <TableRow key={asset.id}>
      <TableCell>{asset.name}</TableCell>
      <TableCell>{asset.type}</TableCell>
      <TableCell className="text-right">
        {formatAsCurrency(asset.value)}
      </TableCell>
    </TableRow>
  );
}

function LiabilitiesTable({ liabilities }: { liabilities: Liability[] }) {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong">
              Liability
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Interest Rate
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong">
              Provider
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong text-right">
              Value
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {liabilities.map((l) => (
            <LiabilityTableRow key={l.id} liability={l} />
          ))}
        </TableBody>
        <TableFoot>
          <TableRow>
            <TableFooterCell className=" font-bold text-tremor-content-strong">
              Total
            </TableFooterCell>
            <TableFooterCell className="text-lg text-tremor-content-strong"></TableFooterCell>
            <TableFooterCell className="text-lg text-tremor-content-strong"></TableFooterCell>

            <TableFooterCell className="text-lg text-tremor-content-strong text-right">
              {formatAsCurrency(
                liabilities.reduce((acc, liability) => acc + liability.value, 0)
              )}
            </TableFooterCell>
          </TableRow>
        </TableFoot>
      </Table>
    </>
  );
}

function LiabilityTableRow({ liability }: { liability: Liability }) {
  return (
    <TableRow key={liability.id}>
      <TableCell>{liability.name}</TableCell>
      <TableCell>{liability.provider}</TableCell>
      <TableCell>{liability.interestRate}</TableCell>
      <TableCell className="text-right">
        {formatAsCurrency(liability.value)}
      </TableCell>
    </TableRow>
  );
}
