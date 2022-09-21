import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  email: '',
  userId: '',
  password: '',
  username: '',
  token: '',
  loading: false,
  error: '',
  msg: '',
};
axios.defaults.withCredentials = true;

export const signUpUser = createAsyncThunk('signupuser', async (userInfo) => {
  const res = await axios.post(
    'https://dec4-49-169-198-207.jp.ngrok.io/api/users/signup',
    userInfo,
  );
  return res.data;
});

export const loginUser = createAsyncThunk('loginuser', (userInfo) => {
  axios
    .post('https://dec4-49-169-198-207.jp.ngrok.io/login', userInfo)
    .then((response) => {
      const accessToken = response.headers.authorization;
      localStorage.setItem('authorization', accessToken);
    })
    .catch((err) => console.log(`${err}`));
});

// export const logoutUser = createAsyncThunk('logoutuser', async () => {
//   const res = await axios.get('/api/users/logout');
//   return res.data;
// });

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state) => {
      state.token = localStorage.getItem('token');
    },
    addUser: (state) => {
      state.user = localStorage.getItem('user');
    },
  },
  extraReducers: {
    // * 회원가입 요청에 따른 예외처리
    [signUpUser.pending]: (state) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state) => {
      state.loading = true;
    },
  },
  // * 로그인 요청의 응답에 따른 예외처리
  [loginUser.pending]: (state) => {
    state.loading = true;
  },
  [loginUser.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
    state.loading = false;
    if (error) {
      state.error = error;
    } else {
      state.msg = msg;
      state.token = token;
      state.user = user;

      localStorage.setItem('msg', msg);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
    }
  },
  [loginUser.rejected]: (state) => {
    state.loading = true;
  },
});

export const { addToken, addUser } = userSlice.actions;

export default userSlice.reducer;
