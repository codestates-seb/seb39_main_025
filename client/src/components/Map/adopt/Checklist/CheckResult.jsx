import React from 'react';
import { questions } from '../../../../data/questions';
import * as S from './CheckResultStyles';

function CheckResult({
  score,
  setStart,
  setScore,
  setCurr,
  setIsResult,
  setIndex,
}) {
  const onClick = () => {
    setScore(0);
    setIndex(1);
    setCurr(questions[0].question);
    setStart(true);
    return setIsResult(false);
  };

  const resultRenderer = () => {
    if (score === 10) {
      return (
        <S.ResultDescText>
          완벽한 예비 보호자이시군요! <br />
          처음 입양을 결심하셨던 마음으로 끝까지 사랑으로 보살펴 주세요.
        </S.ResultDescText>
      );
    }
    if (score >= 7) {
      return (
        <S.ResultDescText>
          잘 준비하셨군요! <br />
          준비되지 않았던 항목에 대한 개선안도 마련해 보세요.
        </S.ResultDescText>
      );
    }
    if (score >= 5) {
      return (
        <S.ResultDescText>
          아직은 입양하기엔 준비해야 할 것이 많습니다. <br />
          다시 한번 고려해주세요!
        </S.ResultDescText>
      );
    }
    return (
      <S.ResultDescText>
        당분간은 랜선 주인으로 만족합시다. <br />
        유기견들은 한번 아픈 기억이 있는 아이들입니다.
      </S.ResultDescText>
    );
  };

  return (
    <S.ResultLayout>
      <S.ResultTitle>테스트 결과</S.ResultTitle>
      <S.ResultScoreBox>
        <span>최종 점수:</span>
        <span className="score">{score}점</span>
      </S.ResultScoreBox>
      {resultRenderer()}
      <div>
        <S.ResultResetBtn type="button" onClick={onClick}>
          다시 테스트하기
        </S.ResultResetBtn>
      </div>
    </S.ResultLayout>
  );
}

export default CheckResult;
