
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
import { useBookQuery } from "@/shared/query/book-query";
import { BookInterface } from "@/types/interface";

interface Column<T> {
  label: string;
  accessor: keyof T;
}

interface TableComponentProps<T> {
  dataArray: T[];
  columns: Column<T>[];
  totalColumn?: keyof T;
}

export function TableComponent<T>({
  dataArray,
  columns,
  totalColumn,
}: TableComponentProps<T>) {
  const { data, isLoading, error } = useBookQuery("books");
  const books: BookInterface[] = data || [];

  const totalPrice = books.reduce((total, book) => {
    const price = parseFloat(book.price);
    return total + price;
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataArray.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.accessor as string}>
                {String(item[column.accessor])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {totalColumn && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length - 1}>Total</TableCell>
            <TableCell className="text-right">{totalPrice}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}

