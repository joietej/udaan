import { get } from "./api";

export const getAirports = async (keyword, token, type = "CITY") => {
  const url = `reference-data/locations?keyword=${keyword}&subType=${type}`;
  const res = await get(url, token);
  return res.data.map((x) => ({ code: x.iataCode, name: `${x.detailedName} , ${x.iataCode}` }));
};
