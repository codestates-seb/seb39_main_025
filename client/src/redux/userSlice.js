import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/* 
  1. 기본적인 리덕스의 작동방식
  - 단방향 데이터 흐름: Action 객체 → Dispatch 함수 → Reducer 함수 → Store
    1. 상태 변경 이벤트 발생 시 변경될 상태에 대한 정보가 담긴 Action 객체가 생성된다.
    2. 이 Action 객체는 Dispatch 함수의 인자로 전달된다.
    3. Dispatch 함수는 Action 객체를 Reducer 함수로 전달한다.
    4. Reducer 함수는 Action 객체의 값을 확인하고 그 값으로 전역 상태 저장소 Store의 상태를 변경한다.
    5. 상태가 변경되고 화면을 재렌더링.

    - action 객체: 어떤 액션을 취할지 정희해 놓은 객체.
    - payload: 해당 action의 값을 reducer 함수로 전달하는 함수
    - dispatch: Action 객체를 Reducer 함수로 전달해주는 함수
    - reducer: dispatch 함수에게 전달받은 Action 객체의 type 값에 따라 상태를 변경시키는 함수
      리듀서는 전달받은 액션을 가지고 새로운 상태를 만들어서 store에 전달한다.
  

  2. Redux Toolkit 설명
  - 2.1 createAsyncThunk
    역할: 액션 생성자 함수
    createAsyncThunk는 비동기 작업을 처리하는 action을 만들어준다. (action creator)
    
    타입지정:
    createAsyncThunk('<액션타입이름>', 비동기 작업 실행 후 실행 결과를 리턴하는 콜백함수)
    
    응답에 따른 예외처리:


 */

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
      /* 멘토미팅: 이 안에서 dispatch 해주면 되지 않을까 */
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
      // 여기서 유저정보를 가져오는?
      // 토큰값을 클라이언트에서 가진 상태에서
      // 유저정보를 가져오는 요청의 thunk가 하나 더 필요
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
