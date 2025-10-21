import axios from "axios";
import { axiosUtils as _ } from "./utils";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
  ..._.defaultOptions
});

export const httpServer = axios.create({
  baseURL: "/api",
  ..._.defaultOptions
});

httpServer.interceptors.response.use(
  (response) => response,
  _.transformInterceptorErrorResponse
);

httpClient.interceptors.response.use(
  (response) => response,
  _.transformInterceptorErrorResponse
);