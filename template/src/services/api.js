import axios from 'axios';

const API = "/api";

export const postRequest = async (path, requestBody, currentUser = undefined) => {

  try {
    const headers = {};
    if (currentUser) {
      headers['AuthToken'] = await currentUser.getIdToken(true);
    }

    return await axios.post(`${API}/${path}`, requestBody, { headers })

  } catch (error) {
    console.error(error.message)
    return undefined;

  }

}

