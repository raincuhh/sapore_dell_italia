import axios, { AxiosInstance } from "axios";

export const axios_instance: AxiosInstance = axios.create({
   baseURL: "http://localhost/sapore_dell_italia",
});

axios_instance.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem("jwt_token");

      if (token) {
         config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
   },
   (err) => {
      return Promise.reject(err);
   }
);

axios_instance.interceptors.response.use(
   (response) => {
      return response;
   },
   (err) => {
      if (err.response && err.response.status === 401) {
         console.error("unauthorized access");
      }
      return Promise.reject(err);
   }
);
