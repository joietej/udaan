const fetch = require("isomorphic-unfetch");

const get = async (url, token, ignoreBaseUrl = false) => {
  const base_url = process.env.AMA_API_URL;
  const api_url = ignoreBaseUrl ? url : `${base_url}/${url}`;
  try {
    const res = await fetch(api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    console.log(res);

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const post = async (url, req) => {
  try {
    const res = await fetch(url, { method: "POST", body: req });

    console.log(res);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get, post };
