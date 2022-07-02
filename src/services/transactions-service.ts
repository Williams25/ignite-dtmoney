import { AxiosResponse } from "axios";
import { CreateTransactions, Transactions } from "../types/Transactions";
import { http } from "./axios-config";

export const TransactionsSerices = {
  getAll: (): Promise<AxiosResponse<Transactions>> => {
    return http.get<Transactions>(`/transactions`);
  },
  create: (data: CreateTransactions) => {
    return http.post("/transactions", data);
  },
};
