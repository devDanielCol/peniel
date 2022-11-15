import { AxiosRequestConfig } from "axios";

const tokenAuth = "fasdfasdf";

export const defaultHttpConfig = (
  config?: AxiosRequestConfig
): AxiosRequestConfig => ({
  responseType: "json",
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    "content-type": "application/json",
    "api-key-client": process.env.NEXT_PUBLIC_API_KEY,
    Authorization: tokenAuth && `Bearer ${tokenAuth}`,
  },
  responseEncoding: "utf8",
  validateStatus: (status) => {
    return status < 500;
  },
  ...config,
});
