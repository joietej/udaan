import React from "react";
import { Switch, Route } from "react-router-dom";

import { Container, Grid, makeStyles } from "@material-ui/core";

import Inspire from "./pages/inspire/Inspire";
import Home from "./pages/home/Home";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const useStyels = makeStyles((theme) => ({
  root: {
    color: theme.palette.text,
    height: "100vh",
    textAlign: "center",
  },
  header: {
    height: "10vh",
  },
  body: {
    height: "80vh",
  },
  footer: {
    height: "10vh",
  },
}));

const Layout = () => {
  const classes = useStyels();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid item className={classes.header}>
        <Header />
      </Grid>
      <Grid item className={classes.body}>
        <Switch>
          <Route exact path="/inspire">
            <Inspire />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Grid>
      <Grid item className={classes.footer}>
        <Footer />
      </Grid>
    </Container>
  );
};

export default Layout;
