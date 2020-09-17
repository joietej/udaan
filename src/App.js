import React from "react";

import Search from "./components/search/Search";

import { useDispatch } from "react-redux";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import Header from "./components/header/Header";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        style={{
          color: theme.palette.text,
          height: "100vh",
          textAlign: "center",
        }}
      >
        <Header />
        <Search />
      </Container>
    </ThemeProvider>
  );
};

export default App;
