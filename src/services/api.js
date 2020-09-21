export const get = async (url, token, ignoreBaseUrl = false) => {
  const base_url = process.env.REACT_APP_AMA_API_URL;
  const api_url = ignoreBaseUrl ? url : `${base_url}/${url}`;
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

export const getImage = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "image/webp,image/apng",
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const blob = await res.blob();
    const data = await convertBlobToBase64(blob);
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

export const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
};
