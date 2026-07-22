"use client";

import { useState } from "react";
import { useTransactionsStore } from "@/store/useTransactionsStore";
import { TransactionList } from "@/components";
import type { Transaction } from "@/lib/types";

export default function TransactionPage() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addTransaction = useTransactionsStore((store) => store.addTransaction);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      description,
      method: "Кредитная карта",
      amount: Number(amount),
      date: new Date().toISOString().slice(0, 10),
    };

    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const created: Transaction = await res.json();
   
    addTransaction(created);
    setDescription("");
    setAmount("");
  };

  return (
    <>
      <h1>TransactionPage</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <TransactionList />
    </>
  );
}
