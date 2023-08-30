import React from "react";
import { Header, Loader } from "./components";
import { css, Global } from "@emotion/react";
import { stylesReset } from "./styles/stylesReset";
import AppRouter from "./Router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { authApi } from "./service/AuthService";
import { Flex } from "./styles";

function App() {
  const { isLoading } = authApi.useIsValidQuery(
    window.localStorage.accessToken,
  );

  return (
    <BrowserRouter>
      <Global
        styles={css`
          ${stylesReset}
        `}
      />
      {isLoading ? (
        <Flex
          sx={{ height: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Loader />
        </Flex>
      ) : (
        <div>
          <Header />
          <AppRouter />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
