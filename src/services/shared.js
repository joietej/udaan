import { getImage } from "./api";
import fetch from "isomorphic-unfetch";

export const getLocationsAsync = async (keyword, type = "CITY") => {
  const url = `/api/locations?keyword=${keyword}&subType=${type}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getAirlinesLogoAsync = async (iataCode) => {
  const logo = localStorage.getItem(iataCode) || null;

  if (!logo) {
    const url = `https://daisycon.io/images/airline/?width=300&height=300&iata=${iataCode}`;
    const res = await getImage(url);
    localStorage.setItem(iataCode, res);
  }

  return logo;
};