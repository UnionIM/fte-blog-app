import React from "react";
import Header from "./components/Header/Header";
import { css, Global } from "@emotion/react";
import { stylesReset } from "./styles/stylesReset";
import AppRouter from "./Router/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Global
        styles={css`
          ${stylesReset}
        `}
      />
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
