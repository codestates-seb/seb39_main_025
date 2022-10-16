import styled from 'styled-components';

export const CheckListLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
  }
`;

export const CheckListContainer = styled.div`
  width: 80%;
  height: 450px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const QuestionBox = styled.form`
  border-radius: 10px;
  width: 400px;
  padding: 30px;
  height: max-content;
  background-color: #fdfdfa;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const QuestionIdx = styled.div`
  img {
    width: 20px;
    height: 20px;
    margin: 0 3px 3px 0;
  }
`;

export const QuestionText = styled.p`
  font-family: 'Jua', sans-serif;
  font-size: 16px;
`;

export const QuestionDescIcon = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50%;
    height: 50%;
  }
`;

export const SelectBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SelectBtn = styled.button`
  width: 50px;
  height: 30px;
  cursor: pointer;
  margin: 10px;
  font-family: 'Jua', sans-serif;
  border-radius: 70px;
  border: none;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  &.yes {
    background-color: skyblue;
  }
`;

export const CurrentScore = styled.div`
  font-family: 'Jua', sans-serif;
`;
