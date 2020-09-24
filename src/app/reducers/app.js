export const initialAppState = {
  destinations: [],
  loading: false,
  locations: [],
  offers: [],
  loadingOffers: false,
  waitingWorker: null,
  notification: "Welcome to Udaan App!",
  origin: null,
};

export default (state = initialAppState, action) => {
  switch (action.type) {
    case "APP_SEARCH":
      return { 
         ...state,
         loading: true,
         origin: action.data.origin
      };
    case "APP_SEARCH_COMPLETED":
      return {
        ...state,
        destinations: action.data.results,
        loading: false,
      };
    case "APP_LOAD_LOCATION_COMPLETED":
      return {
        ...state,
        locations: action.data.results,
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
    case 'APP_CLEAR_NOTIFICATION':
      return {
        ...state,
        notification: null
      }
    default:
      return state;
  }
};
