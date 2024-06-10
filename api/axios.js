/* eslint-disable consistent-return */
import Axios from "axios";
import * as Keychain from "react-native-keychain";

async function AxiosBase() {
  let credentials = await Keychain.getGenericPassword();
  return Axios.create({
    baseURL: "https://revas-backend.onrender.com/api/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${credentials.password}`,
    },
    timeout: 200000,
  });
}

export default AxiosBase;
