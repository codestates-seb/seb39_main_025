import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { questions } from '../../data/questions';

function CheckList() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(1);
  const [isResult, setIsResult] = useState(false);
  const [curr, setCurr] = useState(questions[0].question);

  useEffect(() => {
    const resultRenderer = function () {
      if (index === questions.length + 1) setIsResult(true);
    };
    return resultRenderer();
  }, [index]);

  const handleScoreBtn = (e) => {
    e.preventDefault();
    if (e.target.value === '+' && index <= questions.length + 1) {
      setIndex((prev) => prev + 1);
      setCurr(questions[index]?.question);
      return setScore((prev) => prev <= questions.length && prev + 1);
    }
    if (e.target.value === '-' && index <= questions.length) {
      setIndex((prev) => prev + 1);
      return setScore((prev) => (prev > 0 && prev - 1) || 0);
    }

    return console.log(`${score}`);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    if (e.target.value === 'prev') {
      console.log('이전');
    }
    if (e.target.value === 'next') {
      console.log('다음');
    }
    return console.log(e.target.value);
  };

  return (
    <S.CheckListLayout>
      {isResult ? (
        <div>결과 - 최종 점수: {score}</div>
      ) : (
        <S.QuestionBox>
          <S.QuestionText>{curr}</S.QuestionText>
          <S.SelectBtnBox>
            <div>
              <S.SelectBtn type="button" value="prev" onClick={handleNavigate}>
                이전
              </S.SelectBtn>
              <S.SelectBtn type="button" value="next" onClick={handleNavigate}>
                다음
              </S.SelectBtn>
            </div>
          </S.SelectBtnBox>

          <S.SelectBtnBox>
            <div>
              <S.SelectBtn type="button" value="+" onClick={handleScoreBtn}>
                네
              </S.SelectBtn>
              <S.SelectBtn type="button" value="-" onClick={handleScoreBtn}>
                아니오
              </S.SelectBtn>
            </div>
          </S.SelectBtnBox>
          <div>점수: {score}</div>
        </S.QuestionBox>
      )}
    </S.CheckListLayout>
  );
}

export default CheckList;
