/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { getUser, login, register } from '@/api/auth';
// import { updateProfile, updateProfilePhoto } from '@api/profile';
import { User } from '@/types';



const initialState = {
  user: {},
  isAuthenticated: false,
  isEmailVerified: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserDetails: (state, actions) => {
      state.user = {...state.user, ...actions.payload}
    },
    success: (state) => {
      state.isEmailVerified = true
    },
    logout: () => ({...initialState})
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.fulfilled, (state, {payload}) => {
        state.user = payload.data
        state.isAuthenticated = true

      })
    builder
      .addCase(register.fulfilled, (state, {payload}) => {
        state.user = payload.data
        state.isAuthenticated = true
      
      });
    builder
      .addCase(login.pending, state => {
        state.isAuthenticated = false
        state.isEmailVerified = false
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.user = payload.data
        state.isAuthenticated = true

      })
  
  },
})

export const {getUserDetails, success, logout} = authSlice.actions
export default authSlice.reducer