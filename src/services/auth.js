import { post } from "./api";

export const authenticate = async () => {
  const base_url = process.env.REACT_APP_AMA_API_URL;
  const url = `${base_url}/security/oauth2/token`;

  const params = new URLSearchParams();
  params.append("client_id", process.env.REACT_APP_AMA_API_KEY);
  params.append("client_secret", process.env.REACT_APP_AMA_API_SECRET);
  params.append("grant_type", "client_credentials");

  const data = await post(url, params);
  return data;
};

export const storeToken = (token) => {
  localStorage.removeItem("access_token");
  localStorage.setItem("access_token", token);
};
