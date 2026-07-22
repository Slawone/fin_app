"use client";

import { useEffect } from "react";
import { useTransactionsStore } from "@/store/useTransactionsStore";

export const TransactionsLoader = () => {
  const setTransactions = useTransactionsStore(
    (store) => store.setTransactions,
  );

  useEffect(() => {
    fetch("/api/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, [setTransactions]);

  return null;
};
