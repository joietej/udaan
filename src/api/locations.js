const getToken = require("../server/token");

module.exports =  async (req, res) => {
    const token = await getToken();
    const { keyword, type } = req.query
    const data = await getLocationsAsync(keyword, token ,type)
    res.json(data);
  }

const getLocationsAsync = async (keyword, token, type = "CITY") => {
    const url = `reference-data/locations?keyword=${keyword}&subType=${type}&page%5Blimit%5D=10&page%5Boffset%5D=0&sort=analytics.travelers.score&view=LIGHT`;
    const res = await get(url, token);
    return res.data.map((x) => ({
      code: x.iataCode,
      name: `${x.address.cityName}`,
    }));
};