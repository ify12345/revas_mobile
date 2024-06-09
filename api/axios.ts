import axios from 'axios';

export const config = {
  baseURL: 'https://revas-backend.onrender.com/api/',
};

const AxiosBase = axios.create({
  baseURL: config.baseURL,

  timeout: 100000,
  //   withCredentials: true,
  headers: {
    common: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
  },
});

export default AxiosBase;
