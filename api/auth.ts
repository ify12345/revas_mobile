/* eslint-disable import/no-cycle */
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "./axios";

// Helper function to handle API requests and error handling
const apiRequest = async (request, thunkAPI) => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    // Reject with a standardized error message
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.post("/auths/signup", formData), thunkAPI);
  }
);

export const getUser = createAsyncThunk(
  "auth/get-user",
  async (_, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.get("/v1/profiles"), thunkAPI);
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.post("/auths/login", payload), thunkAPI);
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.post("/auths/logout", payload), thunkAPI);
  }
);
