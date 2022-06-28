import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <TransactionsTable />
    </>
  );
};

export default App;
