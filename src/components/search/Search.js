import React from "react";
import SelectAirport from "../select-airport/SelectAirport";
import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import { CircularProgress, Grid } from "@material-ui/core";

const Search = () => {
  const dispatch = useDispatch();
  const { destinations, loading, airports } = useSelector((state) => state.app);
  const token = useSelector((state) => state.auth.token.access_token);

  React.useEffect(() => {
    dispatch({ type: "APP_LOAD_AIRPORTS" });
  }, [dispatch]);

  const loadFlights = (origin) =>
    dispatch({ type: "APP_SEARCH", data: { origin, token } });

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
            <SearchResults Items={destinations} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
