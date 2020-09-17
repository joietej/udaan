import { get } from "./api";

export const getFlightDestinations = async (
  origin,
  token,
  oneWay = false,
  nonStop = false
) => {
  const url = `shopping/flight-destinations?origin=${origin}&oneWay=${oneWay}&nonStop=${nonStop}`;
  const res = await get(url, token);
  return res?.data || [];
};

export const getFlightOffers = async (url, token) => {
  const res = await get(url, token, true);
  return res?.data || [];
};
