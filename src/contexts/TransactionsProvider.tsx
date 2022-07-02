import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { CreateTransactions, Transactions } from "../types/Transactions";
import { TransactionsSerices } from "../services/transactions-service";

export type TrasactionData = {
  transactions: Transactions[];
  totalDeposit: number;
  totalWithdrawals: number;
  total: number;
  handleTransaction: () => Promise<void>;
  createTransaction: (data: CreateTransactions) => Promise<void>;
};

export type TrasactionProviderProps = {
  children: ReactNode;
};

export const TrasactionDataContext = createContext({} as TrasactionData);

export const TrasactionProvider = ({ children }: TrasactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const handleTransaction = async () => {
    const { data } = await TransactionsSerices.getAll();

    setTransactions(data.transactions);
  };

  const createTransaction = async (data: CreateTransactions) => {
    await TransactionsSerices.create(data);

    handleTransaction();
  };

  useEffect(() => {
    handleTransaction();
  }, []);

  const totalDeposit = useMemo(() => {
    return transactions
      .filter((t) => t.type === "deposit")
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const totalWithdrawals = useMemo(() => {
    return transactions
      .filter((t) => t.type === "withdraw")
      .reduce((acc, t) => acc + t.amount, 0);
  }, [transactions]);

  const total = useMemo(() => {
    return totalDeposit - totalWithdrawals;
  }, [totalWithdrawals, totalDeposit]);

  return (
    <TrasactionDataContext.Provider
      value={{
        transactions,
        totalDeposit,
        totalWithdrawals,
        total,
        handleTransaction,
        createTransaction,
      }}
    >
      {children}
    </TrasactionDataContext.Provider>
  );
};
