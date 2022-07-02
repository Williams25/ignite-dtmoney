import { useContext } from "react";
import { TrasactionDataContext } from "../contexts/TransactionsProvider";

export const useTransactions = () => {
  const { ...transactions } = useContext(TrasactionDataContext);
  return { ...transactions };
};
