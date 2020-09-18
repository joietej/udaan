export const initialAppState = {
  destinations: [],
  loading: false,
  airports: [],
  offers: [],
  loadingOffers: false,
};

export default (state = initialAppState, action) => {
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
      };
    case "APP_LOAD_FLIGHT_OFFERS":
      return {
        ...state,
        loadingOffers: true,
      };
    case "APP_LOAD_FLIGHT_OFFERS_COMPLETED":
      return {
        ...state,
        offers: action.data.results,
        loadingOffers: false,
      };
    default:
      return state;
  }
};
