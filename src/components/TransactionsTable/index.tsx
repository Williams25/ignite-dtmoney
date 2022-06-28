import { useEffect, useState } from "react";
import { http } from "../../services/axios-config";
import { Transactions } from "../../types/Transactions";
import { Container } from "./styles";

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const handleTransaction = async () => {
    const { data } = await http.get<Transactions[]>("/transactions");
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
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && "- "}R$ {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>{String(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
