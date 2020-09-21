import { get } from "./api";
import { getAirlinesLogo } from "./airport";

export const getFlightDestinations = async (
  origin,
  token,
  oneWay = false,
  nonStop = false
) => {
  const url = `shopping/flight-destinations?origin=${origin}&oneWay=${oneWay}&nonStop=${nonStop}`;
  const res = await get(url, token);
  const data = res?.data || [];
  const mappings = res?.dictionaries || [];
  const meta = res?.meta;
  
  if (data && mappings) {
    data.forEach((d, i) => {
      data[i].detailedName =
        mappings.locations[d.destination]?.detailedName || "NA";
      if (meta) {
        data[i].currency = meta.currency;
      }
    });
  }
  return data;
};

export const getFlightOffers = async (url, token) => {
  const res = await get(url, token, true);
  const data = res?.data || [];
  const mappings = res?.dictionaries || [];

  if (mappings?.carriers) {
    for (const code in mappings.carriers) {
      if (mappings.carriers.hasOwnProperty(code)) {
        await getAirlinesLogo(code);
      }
    }
  }

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
  return data;
};
