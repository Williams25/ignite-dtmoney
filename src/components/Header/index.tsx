import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

export type HeaderProps = {
  toggleOpenOrCloseNewTransactionModal: () => void;
};

export const Header = ({
  toggleOpenOrCloseNewTransactionModal,
}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo do projeto dtmoney" />
        <button type="button" onClick={toggleOpenOrCloseNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};
