import React from "react";
import SelectAirport from "../select-airport/SelectAirport";
import { SearchStyle } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import SearchResults from "./SearchResults";

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
      <div style={SearchStyle()}>
        <SelectAirport
          Data={airports}
          OnChange={(origin) => loadFlights(origin)}
        ></SelectAirport>
      </div>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : (
          <SearchResults Items={destinations} />
        )}
      </div>
    </>
  );
};

export default Search;
