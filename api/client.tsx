
import axios from "axios";
import { useContext } from "react";

export const config = {
  baseURL: "https://revas-backend.onrender.com/api/",
  //   baseURL: "http://localhost:8000/api/v1",
};

const client = axios.create({
  baseURL: config.baseURL,

  timeout: 100000,
  //   withCredentials: true,
  headers: {
    common: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
  },
});

export default client;
