export const initialAppState = {
  destinations: [],
  loading: false,
  airports: [],
  offers: [],
  loadingOffers: false,
  waitingWorker: null,
  notification: "Welcome to Udaan App!",
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
        offers: [],
        loadingOffers: true,
      };
    case "APP_LOAD_FLIGHT_OFFERS_COMPLETED":
      return {
        ...state,
        offers: action.data.results,
        loadingOffers: false,
      };
    case "APP_UPDATE_FOUND":
      return {
        ...state,
        notification: action.data.message,
        waitingWorker: action.data.waitingWorker,
      };
    case "APP_UPDATE_COMPLETED":
      return {
        ...state,
        notification: action.data.message,
        waitingWorker: null,
      };
    default:
      return state;
  }
};
