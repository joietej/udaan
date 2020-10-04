const getToken = require("../src/server/token");
const api = require("../src/server/api");

module.exports = async (req, res) => {
  const { access_token } = await getToken();
  const { url } = req.body;
  const data = await getFlightOffersAsync(url, access_token);
  res.json(data);
};

export const getFlightOffersAsync = async (url, token) => {
    const res = await api.get(url, token, true);
    const data = res.data || [];
    const mappings = res.dictionaries || [];
  
    if (data && mappings) {
      data.forEach((offer) => {
        if (offer.validatingAirlineCodes) {
          offer.airlines = [];
          offer.validatingAirlineCodes.forEach((code, i) => {
            offer.airlines.push(mappings.carriers[code]);
          });
        }
        if (offer.itineraries) {
          offer.itineraries.forEach((itinerary) => {
            if (itinerary.segments) {
              itinerary.segments.forEach((segment) => {
                segment.carrierName = mappings.carriers[segment.carrierCode];
                segment.aircraft.name = mappings.aircraft[segment.aircraft.code];
              });
            }
          });
        }
      });
    }
    return {data, mappings};
  };