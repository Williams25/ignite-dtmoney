import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles/theme";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelace de web site",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2021-02-12"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transaction"));
    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create("transaction", data);
    });
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
