/* eslint-disable import/no-cycle */
import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosBase from "./axios";


export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    const Axios = await AxiosBase();
    return Axios.post("/auths/signup", formData), thunkAPI, "auth";
  }
);
export const getUser = createAsyncThunk(
  "auth/get-user",
  async (_, thunkAPI) => {
    const Axios = await AxiosBase();
    return apiRequest(Axios.get("/v1/profile"), thunkAPI);
  }
);


export const login = createAsyncThunk
("auth/login",
				async (payload, thunkAPI) => {
						const Axios = await AxiosBase();
						return (Axios.post('/auths/login', payload),
								thunkAPI, 'auth')
				}
);

