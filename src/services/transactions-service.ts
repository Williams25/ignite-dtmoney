import { Transactions } from "../types/Transactions";

export const TransactionsSerices = {
  getAll: (): Transactions[] => {
    return [
      {
        id: 1,
        title: "Transaction 1",
        amount: 400,
        type: "deposit",
        category: "Food",
        createdAt: new Date(),
      },
      {
        id: 2,
        title: "Transaction 2",
        amount: 100,
        type: "withdraw",
        category: "Food",
        createdAt: new Date(),
      },
    ];
  },
};
