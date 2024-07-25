import React from "react";
import AppRouter from "./router";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/global";
import theme from "./constants/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <RouterProvider router={AppRouter} />
    </ThemeProvider>
  );
};

export default App;
