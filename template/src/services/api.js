import { getRequest, putRequest, postRequest } from "./http-methods";

export const fetchData = async (path, token) => {
  return await getRequest(path, token);
};

export const fetchResource = async ({ resource, token }) => {
  return await getRequest(`/${resource}`, token);
};

export const apiLogin = async (credentials) => {
  return await postRequest("/auth/local", credentials);
};

export const saveInwoner = async (id, inwoner, token) => {
  return await putRequest(`/patients/${id}`, inwoner, token);
};
