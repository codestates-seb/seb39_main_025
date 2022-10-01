import styled from 'styled-components';

export const CheckListLayout = styled.div`
  width: 1000px;
  height: 600px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and(max-width: 479px) {
    width: 300px;
  }
`;

export const QuestionBox = styled.div`
  border: 1px solid black;
  width: 60%;
  height: max-content;
`;

export const QuestionText = styled.p``;

export const SelectBtnBox = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SelectBtn = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  margin: 10px;
`;
