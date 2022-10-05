import React from 'react';
import * as S from './TestStartStyles';
import CoverImage from '../../../../assets/testcover.png';

function TestStartCover({ setStart }) {
  return (
    <S.CoverLayout>
      <S.CoverTitleBox>
        <S.CoverTitleText>유기견 입양 전 체크리스트</S.CoverTitleText>
      </S.CoverTitleBox>
      <S.CoverImageBox>
        <S.CoverImg src={CoverImage} alt="" />
      </S.CoverImageBox>
      <S.CoverDescSpan>
        입양을 결정하기 전에 키울 준비가 되었는지 스스로 확인해보세요!
      </S.CoverDescSpan>
      <S.StartBtnBox>
        <S.StartBtn type="button" onClick={() => setStart(false)}>
          자가진단 시작하기
        </S.StartBtn>
      </S.StartBtnBox>
    </S.CoverLayout>
  );
}

export default TestStartCover;
