import axios from "axios";

const baseURL = "http://10.101.44.218:8080";

export const formDataAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "mutlipart/form-data",
  },
});
export const jsonAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
