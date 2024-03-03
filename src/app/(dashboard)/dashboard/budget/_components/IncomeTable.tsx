import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Badge,
  Tab,
} from "@tremor/react";

import { type Income, INCOME } from "@/app/data";
import { formatAsCurrency } from "@/app/utils";

export default function IncomeTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Detail</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Frequency</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {INCOME.map((income) => (
          <IncomeItem key={income.id} income={income} />
        ))}
      </TableBody>
    </Table>
  );
}

type IncomeItemProps = {
  income: Income;
};

function IncomeItem({ income }: IncomeItemProps) {
  return (
    <TableRow key={income.id}>
      <TableCell>{income.name}</TableCell>
      <TableCell>{formatAsCurrency(income.value)}</TableCell>
      <TableCell>{income.frequency}</TableCell>
      <TableCell>{income.category}</TableCell>
    </TableRow>
  );
}
