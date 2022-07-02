import { CreateTransactions, Transactions } from "../types/Transactions";

import { AxiosResponse } from "axios";
import { http } from "./axios-config";

export const TransactionsSerices = {
  getAll: (): Promise<AxiosResponse<{ transactions: Transactions[] }>> => {
    return http.get<{ transactions: Transactions[] }>(`/transactions`);
  },
  create: (data: CreateTransactions) => {
    const transaction: Transactions = {
      amount: data.value,
      category: data.category,
      createdAt: new Date(),
      title: data.title,
      type: data.type!,
    };

    return http.post("/transactions", transaction);
  },
};
