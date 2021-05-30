import axios, { Method } from "axios";

export const request = (method: Method, url: string) => {
  return axios({
    method,
    url: process.env.REACT_APP_API_URL + url,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};
