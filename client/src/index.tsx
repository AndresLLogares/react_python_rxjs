import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GlobalStyle from "./styles/globalStyled";
import { App } from "./app";
import { UserProvider } from "./helpers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </React.StrictMode>
);
