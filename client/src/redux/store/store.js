import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from '../userSlice';

/* 
1. configureStore()
일반 리덕스의 createStore 함수를 추상화한 함수이다.
*/

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  // eslint-disable-next-line no-import-assign
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger,
  ],
});

export default store;
