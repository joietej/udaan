import { get } from "./api";

export const getFlightDestinations = async (
  origin,
  token,
  oneWay = false,
  nonStop = false
) => {
  const url = `shopping/flight-destinations?origin=${origin}&oneWay=${oneWay}&nonStop=${nonStop}`;
  const res = await get(url, token);
  const data =  res?.data || [];
  const mappings = res?.dictionaries || [] ;
  const meta = res?.meta ;
  if(data && mappings){
    data.forEach((d,i) => {
      data[i].detailedName = mappings.locations[d.destination]?.detailedName || 'NA';
      if(meta){
        data[i].currency = meta.currency;
      }
    })
  }
  return data;
};

export const getFlightOffers = async (url, token) => {
  const res = await get(url, token, true);
  const data =  res?.data || [];
  const mappings = res?.dictionaries || [] ;
  if(data && mappings){
    data.forEach(offer => {
      if(offer.validatingAirlineCodes){
        offer.validatingAirlineCodes.forEach((code,i) => {
          offer.validatingAirlineCodes[i] = mappings.carriers[code];
        });
      }
      if(offer.itineraries){
        offer.itineraries.forEach(itinerary => {
          if(itinerary.segments){
            itinerary.segments.forEach(segment => {
              segment.carrierCode = mappings.carriers[segment.carrierCode];
              segment.aircraft.code = mappings.aircraft[segment.aircraft.code];
            });
          }
        });
      }
    });
  }
  return data;
};
