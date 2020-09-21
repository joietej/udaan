import { get, getImage } from "./api";


export const getAirports = async (keyword, token, type = "CITY") => {
  const url = `reference-data/locations?keyword=${keyword}&subType=${type}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=LIGHT`;
  const res = await get(url, token);
  return res.data.map((x) => ({
    code: x.iataCode,
    name: `${x.address.cityName}`,
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