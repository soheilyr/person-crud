import axios, { AxiosInstance } from "axios";

const Fetch: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  proxy: false,
});

Fetch.interceptors.response.use((response) =>
  response.data ? response.data : response
);
export default Fetch;
