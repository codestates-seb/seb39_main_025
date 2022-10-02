import React, { useState } from 'react';
import * as S from './Styles';

function CheckList() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(1);
  const questions = [
    {
      number: 1,
      question: '질문 1입니다',
    },
    {
      number: 2,
      question: '질문 2입니다',
    },
    {
      number: 3,
      question: '질문 3입니다',
    },
  ];
  const [curr, setCurr] = useState(questions[0].question);

  const handleScoreBtn = (e) => {
    e.preventDefault();
    if (e.target.value === '+' && index < questions.length) {
      setIndex((prev) => prev <= questions.length && prev + 1);
      setCurr(questions[index].question);
      return setScore((prev) => prev + 1);
    }
    if (e.target.value === '-' && index <= questions.length) {
      setIndex((prev) => prev + 1);
      return setScore((prev) => prev - 1);
    }

    return console.log(score);
  };

  return (
    <S.CheckListLayout>
      <S.QuestionBox>
        <S.QuestionText>{curr}</S.QuestionText>

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
      </S.QuestionBox>
    </S.CheckListLayout>
  );
}

export default CheckList;
