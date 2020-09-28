const api = require("./api");

module.exports = async () => {
  const base_url = process.env.AMA_API_URL;
  const url = `${base_url}/security/oauth2/token`;

  const params = new URLSearchParams();
  params.append("client_id", process.env.AMA_API_KEY);
  params.append("client_secret", process.env.AMA_API_SECRET);
  params.append("grant_type", "client_credentials");

  const data = await api.post(url, params);
  return data;
};
