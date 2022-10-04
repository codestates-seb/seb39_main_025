import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  username: '',
  password: '',
  email: '',
  name: '',
};
axios.defaults.withCredentials = true;

export const signUpUser = createAsyncThunk('signupuser', async (userInfo) => {
  const res = await axios.post('https://server.staybuddy.net/signup', userInfo);
  return res.data;
});

export const loginUser = createAsyncThunk('loginuser', async (userInfo) => {
  const res = await axios.post('https://server.staybuddy.net/login', userInfo);
  const memberId = res.headers.memberid;
  const accessToken = res.headers.authorization;
  const loginStatus = true;
  localStorage.setItem('userId', memberId);
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('loginStatus', loginStatus);
  axios.defaults.headers.common['Authorization'] = `${accessToken}`;

  return res;

  // axios
  //   .post(
  //     'http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/login',
  //     userInfo,
  //   )
  //   .then((response) => {
  //     /* 멘토미팅: 이 안에서 dispatch 해주면 되지 않을까 */
  //     // 1. 추후 마이페이지-회원정보 수정 요청 시
  //     // 유저 특정을 위하여 로그인 시 memberid값 로컬스토리지에 저장
  //     const memberId = response.headers.memberid;
  //     localStorage.setItem('userId', memberId);
  //     // 2. 로그인 시 토큰값 로컬스토리지에 저장
  //     const accessToken = response.headers.authorization;
  //     console.log(accessToken);
  //     localStorage.setItem('accessToken', accessToken);
  //     // 3. 클라이언트단에서 조건부 렌더링을 위한 로그인 상태인지 확인하는 로컬스토리지 값
  //     const loginStatus = true;
  //     localStorage.setItem('loginStatus', loginStatus);
  //     axios.defaults.headers.common['Authorization'] = `${accessToken}`;
  //     // 여기서 유저정보를 가져오는?
  //     // 토큰값을 클라이언트에서 가진 상태에서
  //     // 유저정보를 가져오는 요청의 thunk가 하나 더 필요
  //   })
  //   .catch((err) => console.log(`${err}`));
});

// * 현재 아래 작성한 reducer들을 실제 코드에서 전혀 사용하고 있지 않기 때문에 리팩토링 필요
// TODO: 리덕스 로거로 백엔드와 테스트해보면서 reducers, extraReducers 수정
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // * 회원가입 요청에 따른 예외처리
    [signUpUser.pending]: (state, action) => {
      console.log(state);
      console.log(action);
      console.log('회원가입 pending');
    },
    [signUpUser.fulfilled]: (state, payload, action) => {
      console.log(state);
      console.log(action);
      console.log(payload);
      console.log('회원가입 fulfilled');
    },
    [signUpUser.rejected]: (state, action) => {
      console.log(state);
      console.log(action);
      console.log('회원가입 rejected');
    },
  },
  // * 로그인 요청의 응답에 따른 예외처리
  [loginUser.pending]: (state, action) => {
    console.log(state);
    console.log(action);
    console.log('로그인 pending');
  },
  [loginUser.fulfilled]: (state, payload, action) => {
    console.log(state);
    console.log(payload);
    console.log('로그인 fulfilled');
    state.username = action.payload.username;
    state.accessToken = action.payload.accessToken;
    state.profileImageUrl = action.payload.profileImageUrl;
    console.log(state);
  },
  [loginUser.rejected]: (state, action) => {
    console.log(state);
    console.log(action);
    console.log('로그인 rejected');
  },
});

export const { addToken, addUser } = userSlice.actions;

export default userSlice.reducer;
