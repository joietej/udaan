export default (state = { destinations: [], loading: false, airports: [], offers: [] }, action) => {
  switch (action.type) {
    case "APP_SEARCH":
      return { ...state, loading: true };
    case "APP_SEARCH_COMPLETED":
      return {
        ...state,
        destinations: action.data.results,
        loading: false,
      };
    case "APP_LOAD_AIRPORT_COMPLETED":
      return {
        ...state,
        airports: action.data.results,
      }
    case "APP_LOAD_FLIGHT_OFFERS_COMPLETED":
      return {
        ...state,
        offers: action.data.results
      }
    default:
      return state;
  }
};
