import { transactionInterface } from "@/components/Interface/interface";

interface PropsInterface {
  e: React.FormEvent<HTMLFormElement>;
  transaction: transactionInterface;
}

export const handleSubmit = async ({
  e,
  transaction,

}: PropsInterface): Promise<boolean> => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...transaction,
        amount: parseFloat(transaction.amount.replace("$", "")),
      }),
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};
