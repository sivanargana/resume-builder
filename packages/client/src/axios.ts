import axios from "axios";
import { toast } from "sonner";
import { API } from "./features/auth/api";
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.interceptors.request.use(
  function (config) {
    config.headers.set("Authorization", `Bearer ${API.TOKEN}`);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.status) {
      case 400:
        toast.error(error?.message || "Bad Request");
        break;

      case 401:
        toast.error("Unauthorized. Please log in again.");

        break;

      case 403:
        toast.error("You do not have permission to perform this action.");
        break;

      case 404:
        toast.error("Requested resource not found.");
        break;

      case 409:
        toast.error(error?.message || "Conflict occurred.");
        break;

      case 422:
        toast.error(error?.message || "Validation failed.");
        break;

      case 429:
        toast.error("Too many requests. Please try again later.");
        break;

      case 500:
        toast.error("Internal server error.");
        break;

      case 502:
        toast.error("Bad gateway.");
        break;

      case 503:
        toast.error("Service unavailable.");
        break;

      case 504:
        toast.error("Gateway timeout.");
        break;

      default:
        toast.error(error?.message || "Something went wrong.");
    }

    return Promise.reject(error);
  },
);
