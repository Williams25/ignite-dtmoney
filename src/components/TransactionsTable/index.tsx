import { useEffect, useState } from "react";
import { TransactionsSerices } from "../../services/transactions-service";
import { Transactions } from "../../types/Transactions";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transactions | null>(null);

  const handleTransaction = async () => {
    const { data } = await TransactionsSerices.getAll();
    setTransactions(data);
  };

  useEffect(() => {
    handleTransaction();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && "- "}
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
