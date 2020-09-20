import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

const Home = () => {
  return (
    <>
      <Logo />
      <Grid container justify="center">
        <Grid item>
          <Link to="/inspire">Inspire Me !</Link>
        </Grid>
        <Grid item>
          <Link to="/search">Search</Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
