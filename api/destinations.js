const getToken = require("../src/server/token");
const api = require("../src/server/api");

module.exports = async (req, res) => {
  const { access_token } = await getToken();
  const { origin, oneWay, nonStop } = req.query;
  const data = await getFlightDestinationsAsync(
    origin,
    access_token,
    oneWay,
    nonStop
  );
  res.json(data);
};

export const getFlightDestinationsAsync = async (
  origin,
  token,
  oneWay = false,
  nonStop = false
) => {
  const url = `shopping/flight-destinations?origin=${origin}&oneWay=${oneWay}&nonStop=${nonStop}`;
  const res = await api.get(url, token);
  const data = res.data || [];
  const mappings = res.dictionaries || [];
  const meta = res.meta;

  if (data && mappings) {
    data.forEach((d, i) => {
      data[i].detailedName =
        mappings.locations[d.destination].detailedName || "NA";
      if (meta) {
        data[i].currency = meta.currency;
      }
    });
  }
  return data;
};
