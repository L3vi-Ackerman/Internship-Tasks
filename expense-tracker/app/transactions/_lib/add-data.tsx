// import { transactionInterface } from "@/components/Interface/interface";
// import { useState } from "react";
// const [transaction, setTransaction] = useState<transactionInterface>({
//   invoice: "",
//   description: "",
//   amount: "",
//   category: "",
//   type: "",
//   paymentStatus: "",
//   paymentMethod: "",
// });

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setTransaction({
//     ...transaction,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   try {
//     const response = await fetch("http://localhost:5000/transactions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ...transaction,
//         amount: parseFloat(transaction.amount.replace("$", "")),
//         date: new Date().toISOString().split("T")[0],
//       }),
//     });

//     if (response.ok) {
//       alert("Transaction added successfully!");
//       setTransaction({
//         invoice: "",
//         description: "",
//         amount: "",
//         category: "",
//         date: "",
//         type: "",
//         paymentStatus: "",
//         paymentMethod: "",
//       });
//     } else {
//       alert("Error adding transaction");
//     }
//   } catch (error) {
//     console.error("Error: ", error);
//     alert("failed to add transaction");
//   }
// };
