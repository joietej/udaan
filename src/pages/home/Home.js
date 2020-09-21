import { Grid } from "@material-ui/core";
import React from "react";

import Logo from "../../components/logo/Logo";
import ImageLink from "../../components/shared/ImageLink";

import search from "./search-flights-icon.svg";
import inspire from "./inspire-icon.svg";
import schedule from "./schedule-icon.svg";

const Home = () => {
  return (
    <>
      <Logo />
      <Grid container justify="center">
        <Grid item>
          <ImageLink
            Image={inspire}
            AltImageText="Inspire"
            Text="Inspire Me !"
            To="/inspire"
          />
        </Grid>
        <Grid item>
          <ImageLink
            Image={search}
            AltImageText="Search"
            Text="Search Flights"
            To="/search"
          />
        </Grid>
        <Grid item>
          <ImageLink
            Image={schedule}
            AltImageText="Schedule"
            Text="Flights Schedule"
            To="/schedule"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
