import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import { createServer } from "miragejs";
import { TransactionsSerices } from "./services/transactions-service";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => TransactionsSerices.getAll());
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
