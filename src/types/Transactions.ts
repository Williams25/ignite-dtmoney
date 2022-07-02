import { TypeTransition } from "../components/NewTransactionModal";

export type Transactions = {
  transactions: {
    id: number;
    title: string;
    amount: number;
    type: "deposit" | "withdraw";
    category: string;
    createdAt: Date;
  }[];
};

export type CreateTransactions = {
  type: TypeTransition | null;
  title: string;
  category: string;
  value: number;
};
