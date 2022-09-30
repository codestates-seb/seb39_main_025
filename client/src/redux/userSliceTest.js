import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    accessToken: '',
    profileImageUrl: '',
  },
  reducers: {
    loginMember: (state, action) => {
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
      state.profileImageUrl = action.payload.profileImageUrl;
    },
    clearUser: (state) => {
      state.username = '';
      state.accessToken = '';
      state.profileImageUrl = '';
    },
  },
});

export const { loginMember, clearUser } = userSlice.actions;

export default userSlice.reducers;
