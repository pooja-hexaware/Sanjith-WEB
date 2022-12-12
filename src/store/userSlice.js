/* eslint import/no-extraneous-dependencies: off */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const setUser = createAsyncThunk('user/setUser', async (user) => {
  return user;
});

const initialState = {
  role: ["user"], // guest
  data: {
    id: 1,
    displayName: 'Sample User',
    photoURL: '',
    email: 'sampleuser@gmail.com',
    isSuperAdmin: false,
    roles: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedOut: (state, action) => initialState,
  },
  extraReducers: {
    [setUser.fulfilled]: (state, action) => action.payload,
  },
});

export const { userLoggedOut } = userSlice.actions;

export const selectUser = ({ user }) => user;

export default userSlice.reducer;