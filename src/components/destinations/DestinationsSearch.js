import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SearchDestination from "./SearchDestination";
import Destinations from "./Destinations";
import { CircularProgress, Drawer, Grid } from "@material-ui/core";

const InspireSearch = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { destinations, loading, locations } = useSelector(
    (state) => state.app
  );

  const { origin } = useSelector((state) => state.app);

  const history = useHistory();

  const loadFlights = (origin) =>
    dispatch({ type: "APP_SEARCH", data: { origin } });

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const OnItemSelected = (item) => {
    history.push("offers");
    dispatch({
      type: "APP_LOAD_FLIGHT_OFFERS",
      data: { url: item.links.flightOffers },
    });
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} md={6}>
        <SearchDestination
          Data={locations}
          OnChange={(origin) => loadFlights(origin)}
          Selected={origin}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Destinations Items={destinations} OnSelection={OnItemSelected} />
          )}
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      ></Drawer>
    </Grid>
  );
};

export default InspireSearch;
