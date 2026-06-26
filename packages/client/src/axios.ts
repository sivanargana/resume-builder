import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.interceptors.request.use(
  function (config) {
    config.headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
