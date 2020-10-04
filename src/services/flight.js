import fetch from "isomorphic-unfetch";
import { getAirlinesLogoAsync } from "./shared";

export const getFlightDestinationsAsync = async (
  origin,
  oneWay = false,
  nonStop = false
) => {
  const url = `/api/destinations?origin=${origin}&oneWay=${oneWay}&nonStop=${nonStop}`;
  const res = await fetch(url);
  const data = res.json();
  return data;
};

export const getFlightOffersAsync = async (url) => {
  const api_url = "/api/offers";
  const res = await fetch(api_url, { method: "POST", body: { url } });

  const { data, mappings } = res;

  if (mappings?.carriers) {
    for (const code in mappings.carriers) {
      if (mappings.carriers.hasOwnProperty(code)) {
        await getAirlinesLogoAsync(code);
      }
    }
  }

  return data;
};
