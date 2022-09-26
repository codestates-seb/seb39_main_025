import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  email: '',
  name: '',
  token: '',
  loading: false,
  error: '',
  msg: '',
};
axios.defaults.withCredentials = true;

export const signUpUser = createAsyncThunk('signupuser', async (userInfo) => {
  const res = await axios.post(
    'http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/signup',
    userInfo,
  );
  return res.data;
});

export const loginUser = createAsyncThunk('loginuser', (userInfo) => {
  axios

    .post(
      'http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/login',
      userInfo,
    )

    .then((response) => {
      // 1. 추후 마이페이지-회원정보 수정 요청 시
      // 유저 특정을 위하여 로그인 시 memberid값 로컬스토리지에 저장
      const memberId = response.headers.memberid;
      localStorage.setItem('userId', memberId);
      // 2. 로그인 시 토큰값 로컬스토리지에 저장
      const accessToken = response.headers.authorization;
      console.log(accessToken);
      localStorage.setItem('accessToken', accessToken);
      // 3. 클라이언트단에서 조건부 렌더링을 위한 로그인 상태인지 확인하는 로컬스토리지 값
      const loginStatus = true;
      localStorage.setItem('loginStatus', loginStatus);
      axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    })
    .catch((err) => console.log(`${err}`));
});

// * 현재 아래 작성한 reducer들을 실제 코드에서 전혀 사용하고 있지 않기 때문에 리팩토링 필요
// TODO: 리덕스 로거로 백엔드와 테스트해보면서 reducers, extraReducers 수정
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
