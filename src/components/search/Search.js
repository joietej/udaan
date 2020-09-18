import React from "react";
import SelectAirport from "../select-airport/SelectAirport";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import {
  AppBar,
  CircularProgress,
  Drawer,
  Grid,
  List,
  ListItem,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  LinearProgress
} from "@material-ui/core";
import { LocalOffer, Close } from "@material-ui/icons";
import Offer from "../offers/Offer";

const Search = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const dispatch = useDispatch();
  const {
    destinations,
    loading,
    airports,
    offers,
    loadingOffers,
  } = useSelector((state) => state.app);
  const token = useSelector((state) => state.auth.token.access_token);

  React.useEffect(() => {
    dispatch({ type: "APP_LOAD_AIRPORTS" });
  }, [dispatch]);

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
      <Grid item xs="12">
        <SelectAirport
          Data={airports}
          OnChange={(origin) => loadFlights(origin)}
        />
      </Grid>
      <Grid item xs="12">
        <Grid container justify="center">
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <SearchResults Items={destinations} OnSelection={OnItemSelected} />
          )}
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <AppBar position="static">
         {loadingOffers && (<LinearProgress/>)}
          <Toolbar>
            <Typography variant="h6">Flight Offers</Typography>
            <IconButton color="inherit">
              <Badge badgeContent={offers.length} color="secondary">
                <LocalOffer />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={() => toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Toolbar>
          {loadingOffers && (<LinearProgress color="secondary"/>)}
        </AppBar>
        <List>
          {offers.map((o) => (
            <ListItem>
              <Offer Data={o} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Grid>
  );
};

export default Search;
