import { Dispatch } from 'redux';
import { logout } from '@/redux/reducers/auth';

export const performLogout = (dispatch: Dispatch) => {
  dispatch(logout());
};
