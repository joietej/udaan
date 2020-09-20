import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Layout from "./Layout";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "AUTH_GET" });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
