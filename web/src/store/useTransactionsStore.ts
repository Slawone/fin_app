import { create } from "zustand";
import { transactions as initialTransactions } from "@/lib/data";
import type { Transaction } from "@/lib/types";

type TransactionState = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionsStore = create<TransactionState>((set) => ({
  transactions: initialTransactions,
  addTransaction: (transaction) => set((state) => ({ transactions: [transaction, ...state.transactions]}))
}))
