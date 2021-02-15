import axios from "axios";
const API = process.env["REACT_APP_API"];

export const getRequest = async (path, token = undefined) => {
  try {
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const { data } = await axios.get(`${API}${path}`, {
      headers,
    });
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const postRequest = async (
  path,
  requestBody,
  token = undefined,
  api = API,
  responseType = "json"
) => {
  try {
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const { data } = await axios.post(`${api}${path}`, requestBody, {
      headers,
      responseType,
    });
    return data;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

export const putRequest = async (path, requestBody, token = undefined) => {
  try {
    const headers = {};
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const { data } = await axios.put(`${API}${path}`, requestBody, {
      headers,
    });
    return data;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};
