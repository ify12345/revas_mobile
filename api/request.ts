/* eslint-disable import/no-cycle */
import { AxiosResponse } from 'axios';
import * as Keychain from 'react-native-keychain';
import { logout } from '@/redux/reducers/auth';
import store from '@/redux/store';
import { RejectValue } from '@/types/api';

interface ErrorPayload {
  response: {
    data: {
      errors: string;
    };
    status: number;
  };
}
type RejectedWithValue = {
  rejectWithValue(rejectValue: RejectValue): { payload: RejectValue };
};

async function apiRequest(
  asyncFn: Promise<AxiosResponse>,
  thunkAPI: RejectedWithValue,
  route?: string
) {
  try {
    const { data } = await asyncFn;
    if (route === 'auth') {
      const {
        data: { token },
      } = data;
      const key = 'revas';
      await Keychain.setGenericPassword(key, token);
    }
    return data;
  } catch (err) {
    const error = err as ErrorPayload;
    const { response } = error;
    if (!response) {
      console.error('Network Error:', error);
      return thunkAPI.rejectWithValue({ msg: 'Network Error', status: 500 });
    }

    const { status, data: { errors } } = response;

    if (status === 500) {
      console.error('Server Error:', errors);
      return thunkAPI.rejectWithValue({ msg: 'Server Error', status: 500 });
    }

    if (status === 401) {
      store.dispatch(logout());
    }

    console.error('API Error:', errors);
    return thunkAPI.rejectWithValue({
      msg: errors,
      status,
    });
  }
}

export default apiRequest;
