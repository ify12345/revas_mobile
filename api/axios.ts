/* eslint-disable consistent-return */
import Axios from "axios";
import * as Keychain from 'react-native-keychain';

async function AxiosBase() {
  return Axios.create({
    baseURL: 'https://revas-backend.onrender.com/api/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/json',
      
    },
    timeout: 200000
  })
}

export default AxiosBase;