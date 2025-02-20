import { AddTransaction } from "@/components/add-transaction";
import { TransactionTable } from "@/components/transaction-table";
import React from "react";

const TransactionPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min md:grid-cols-1 gap-4 p-4">
        <TransactionTable isDashboard={false} />
        <AddTransaction />
      </div>
    </div>
  );
};

export default TransactionPage;
