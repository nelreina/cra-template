import axios from "axios";

const API = "/api";

export const getRequest = async (currency) => {
  const response = await axios.get(
    `https://api.ratesapi.io/api/latest?base=${currency}`
  );
  // const response = await axios.get("/");
  return response.data;
};

export const postRequest = async (
  path,
  requestBody,
  currentUser = undefined
) => {
  try {
    const headers = {};
    if (currentUser) {
      headers["AuthToken"] = await currentUser.getIdToken(true);
    }

    return await axios.post(`${API}/${path}`, requestBody, { headers });
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

export const fetcher = (url) =>
  axios.get(url).then((response) => response.data);
