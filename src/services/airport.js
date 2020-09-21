import { get, getImage } from "./api";

export const getAirports = async (keyword, token, type = "CITY") => {
  const url = `reference-data/locations?keyword=${keyword}&subType=${type}`;
  const res = await get(url, token);
  return res.data.map((x) => ({
    code: x.iataCode,
    name: `${x.detailedName} , ${x.iataCode}`,
  }));
};

export const getAirlinesLogo = async (iataCode) => {
  const logo = localStorage.getItem(iataCode) || null;

  if (!logo) {
    const url = `https://daisycon.io/images/airline/?width=300&height=300&iata=${iataCode}`;
    const res = await getImage(url);
    localStorage.setItem(iataCode, res);
  }

  return logo;
};
