import { Container } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";
import totalImage from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export const Summary = () => {
  const { totalDeposit, totalWithdrawals, total } = useTransactions();

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas" />
        </header>
        <strong>{formatCurrency(totalDeposit)}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas" />
        </header>
        <strong>- {formatCurrency(totalWithdrawals)}</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </Container>
  );
};
