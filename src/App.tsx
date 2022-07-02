import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  const toggleOpenOrCloseNewTransactionModal = () =>
    setIsNewTransactionModalOpen((open) => !open);

  return (
    <>
      <Header
        toggleOpenOrCloseNewTransactionModal={
          toggleOpenOrCloseNewTransactionModal
        }
      />
      <Dashboard />
      <TransactionsTable />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={toggleOpenOrCloseNewTransactionModal}
      />
    </>
  );
};

export default App;
