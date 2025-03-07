/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import * as Keychain from 'react-native-keychain';
import { logout } from '@/redux/reducers/auth';
import { performLogout } from '@/redux/utils/authActions';
import { RejectValue } from '@/types/api';

interface ErrorPayload {
  response: {
    data: {
      errors: string
    },
    status: number
  }
};
type RejectedWithValue = {
  rejectWithValue(rejectValue: RejectValue): { payload: RejectValue }
};



async function apiRequest(asyncFn: Promise<AxiosResponse>, thunkAPI: RejectedWithValue, route?: string) {
  try {
    const { data } = await asyncFn;
    if (route === "auth") {
      const { data: { refresh_token } } = data;
      const key = 'revas';
      await Keychain.setGenericPassword(key,refresh_token);
    }
    return data
  } catch (err) {
    const error = err as ErrorPayload          
    if (!error?.response) {
      return thunkAPI.rejectWithValue({ msg: "Network Error", status: 500 })
    } 
    if (error?.response?.status === 500) {
      return thunkAPI.rejectWithValue({ msg: "Server Error", status: 500 })
    }
    if (error?.response.status === 401) {
      performLogout(); 
      
    }
    return thunkAPI.rejectWithValue({
      msg: error?.response?.data?.errors,
      status: error?.response?.status
    });

  }
};

export default apiRequest;