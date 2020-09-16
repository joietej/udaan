import React from "react";
import { Row, Progress } from "shards-react";
import { useDispatch, useSelector } from "react-redux";

import SearchResults from "./SearchResults";
import SelectAirport from "../select-airport/SelectAirport";

import { SearchStyle } from "./styles";

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
    <>
      <Row style={SearchStyle()}>
        <SelectAirport
          Data={airports}
          OnChange={(origin) => loadFlights(origin)}
        ></SelectAirport>
      </Row>
      <Row>
        {loading ? (
          <Progress bar animated value={100} />
        ) : (
          <SearchResults Items={destinations} />
        )}
      </Row>
    </>
  );
};

export default Search;
