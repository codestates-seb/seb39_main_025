import React from 'react';
import { Background, LoadingText } from './LoadingStyle';
import Spinner from '../../assets/loading.gif';

function Loading() {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="10%" />
      <LoadingText> 잠시만 기다려 주세요...</LoadingText>
    </Background>
  );
}

export default Loading;
