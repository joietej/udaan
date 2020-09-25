import React from "react";
import SelectAirport from "../select-airport/SelectAirport";
import { useDispatch, useSelector } from "react-redux";
import InspireSearchResults from "./InspireSearchResults";
import { CircularProgress, Drawer, Grid } from "@material-ui/core";

import Offers from "../offers/Offers";

const InspireSearch = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {
    destinations,
    loading,
    locations,
    offers,
    loadingOffers,
  } = useSelector((state) => state.app);
  const token = useSelector((state) => state.auth.token.access_token);
  const { origin } = useSelector((state) => state.app);

  const loadFlights = (origin) =>
    dispatch({ type: "APP_SEARCH", data: { origin, token } });

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const OnItemSelected = (item) => {
    toggleDrawer(true);
    dispatch({
      type: "APP_LOAD_FLIGHT_OFFERS",
      data: { url: item.links.flightOffers, token: token },
    });
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={12} md={6}>
        <SelectAirport
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
            <InspireSearchResults
              Items={destinations}
              OnSelection={OnItemSelected}
            />
          )}
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Offers
          Data={offers}
          Loading={loadingOffers}
          OnClose={() => toggleDrawer(false)}
        />
      </Drawer>
    </Grid>
  );
};

export default InspireSearch;
