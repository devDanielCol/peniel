import { http } from "../http";

if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
  http.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log(error);
    }
  );

  http.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      console.log(error);
    }
  );
}
