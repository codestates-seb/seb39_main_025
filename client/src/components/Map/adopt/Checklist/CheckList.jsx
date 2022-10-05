import React, { useState, useEffect } from 'react';
import { MdFamilyRestroom } from 'react-icons/md';
import { FaDog } from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';
import * as S from './Styles';
import { questions } from '../../../../data/questions';
import CheckResult from './CheckResult';
import TestStartCover from './TestStartCover';
import Paw from '../../../../assets/paw-active.png';

function CheckList() {
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(1);
  const [isResult, setIsResult] = useState(false);
  const [curr, setCurr] = useState(questions[0].question);

  const family = [1, 2, 3, 4];
  const puppy = [5, 6, 9, 10];

  useEffect(() => {
    // eslint-disable-next-line func-names
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
      return setCurr(questions[index]?.question);
    }

    return console.log(`${score}`);
  };

  const iconRenderer = () => {
    if (family.includes(index)) return <MdFamilyRestroom />;
    if (puppy.includes(index)) return <FaDog />;
    return <GiHouse />;
  };

  return (
    <S.CheckListLayout>
      <S.CheckListContainer>
        {start ? (
          <TestStartCover setStart={setStart} />
        ) : (
          <div>
            {isResult ? (
              <CheckResult
                score={score}
                setScore={setScore}
                setStart={setStart}
                setIndex={setIndex}
                setCurr={setCurr}
                setIsResult={setIsResult}
              />
            ) : (
              <S.QuestionBox onClick={(e) => e.preventDefault()}>
                <S.QuestionIdx>
                  <img src={Paw} alt="" />
                  <span>Q{index}</span>
                </S.QuestionIdx>
                <S.QuestionText>{curr}</S.QuestionText>
                <S.QuestionDescIcon>{iconRenderer()}</S.QuestionDescIcon>
                <S.SelectBtnBox>
                  <S.SelectBtn
                    type="button"
                    className="yes"
                    value="+"
                    onClick={handleScoreBtn}
                  >
                    네
                  </S.SelectBtn>
                  <S.SelectBtn
                    type="button"
                    className="no"
                    value="-"
                    onClick={handleScoreBtn}
                  >
                    아니오
                  </S.SelectBtn>
                </S.SelectBtnBox>
                <S.CurrentScore>현재 점수: {score}</S.CurrentScore>
              </S.QuestionBox>
            )}
          </div>
        )}
      </S.CheckListContainer>
    </S.CheckListLayout>
  );
}

export default CheckList;
