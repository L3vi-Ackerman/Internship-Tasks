"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import InputComponent from "./input-component";
import {
  InputComponentInterface,
  transactionInterface,
} from "./Interface/interface";
import { inputFields } from "@/app/transactions/_lib/input-fields";
import { handleSubmit } from "@/lib/post-transactions";

export function AddTransaction() {
  const [transaction, setTransaction] = useState<transactionInterface>({
    invoice: "",
    description: "",
    amount: "",
    category: "",
    type: "",
    paymentStatus: "",
    paymentMethod: "",
  });

  const notify = () => toast("Wow so easy!");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isSuccess = await handleSubmit({ e, transaction });

    if (isSuccess) {
      setTransaction({
        invoice: "",
        description: "",
        amount: "",
        category: "",
        type: "",
        paymentStatus: "",
        paymentMethod: "",
      });
      notify();
    } else {
      notify();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Transactions</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Transactions</DialogTitle>
          <DialogDescription>
            Add transactions here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <div className="grid gap-4 py-4">
            {inputFields.map((field: InputComponentInterface) => (
              <InputComponent
                key={field.name}
                name={field.name}
                id={field.id}
                labelName={field.labelName}
                value={transaction[field.name as keyof transactionInterface]}
                setTransaction={setTransaction}
              />
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
