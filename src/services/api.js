export const get = async (url, token) => {
  const base_url = process.env.REACT_APP_AMA_API_URL;
  const api_url = `${base_url}/${url}`;
  try {
    const res = await fetch(api_url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url, req) => {
  try {
    const res = await fetch(url, { method: "POST", body: req });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
