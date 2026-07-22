import { create } from "zustand";
import type { Transaction } from "@/lib/types";

type TransactionState = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionsStore = create<TransactionState>((set) => ({
  transactions: [],
  addTransaction: (transaction) => set((state) => ({ transactions: [transaction, ...state.transactions]})),
  setTransactions: (transactions) => set({transactions})
}))
