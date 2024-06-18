import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../api/config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();
export const useGlobalContext = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const register = async (formData) => {
    setIsLoading(true);
    const url = `${BASE_URL}/auths/signup`;
    console.log(`Request URL: ${url}`);
    try {
      const res = await axios.post(url, formData);
      let userInfo = res.data;
      console.log(userInfo);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      return { success: true, data: userInfo };
    } catch (e) {
      console.log(`register error ${e}`);
      return { success: false, error: e };
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (userData) => {
    setIsLoading(true);
    const url = `${BASE_URL}/auths/login`;
    console.log(`Request URL: ${url}`);
    try {
      const res = await axios.post(url, userData);
      let userInfo = res.data;
      console.log(userInfo);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      return { success: true, data: userInfo };
    } catch (e) {
      console.log(`login error: ${e}`);
      return { success: false, error: e };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    await AsyncStorage.removeItem("userInfo");
    setUserInfo({});
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem("userInfo");
      if (userInfo) {
        setUserInfo(JSON.parse(userInfo));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
        isLoading,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
