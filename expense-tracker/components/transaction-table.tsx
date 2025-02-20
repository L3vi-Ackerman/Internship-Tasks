"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactionInterface } from "./Interface/interface";
import { useFetch } from "@/hooks/custom-hooks";

interface items {
  isDashboard: boolean;
}

export function TransactionTable({ isDashboard }: items) {
  const { data, error, loading } = useFetch<transactionInterface>(
    "http://localhost:5000/transactions"
  );

  const totalAmount = data.reduce((total, invoice) => {
    const amount = parseFloat(invoice.amount);
    return invoice.type.trim().toLowerCase() === "expense"
      ? total - amount
      : total + amount;
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Method</TableHead>
          {!isDashboard && (
            <>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
            </>
          )}
          <TableHead className="text-right" colSpan={5}>
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((invoice: transactionInterface) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>

            {!isDashboard && (
              <>
                <TableCell>{invoice.category}</TableCell>
                <TableCell>{invoice.description}</TableCell>
              </>
            )}
            <TableCell
              className="text-right"
              colSpan={5}
              style={{
                color:
                  invoice.type.trim().toLowerCase() === "expense"
                    ? "hsl(var(--chart-1))"
                    : "hsl(var(--chart-2))",
              }}
            >
              ${invoice.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={isDashboard ? 3 : 5}>Total</TableCell>
          <TableCell className="text-right">{totalAmount.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
