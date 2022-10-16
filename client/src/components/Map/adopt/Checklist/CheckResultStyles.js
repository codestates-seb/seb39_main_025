import styled from 'styled-components';
import { Button } from '../../../../GlobalStyle';

export const ResultLayout = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const ResultTitle = styled.h3`
  font-family: 'Jua', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #1d3561;
`;

export const ResultScoreBox = styled.div`
  color: gray;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 70px;
  background-color: lightyellow;

  span {
    font-family: 'Jua', sans-serif;

    &.score {
      color: #1d3561;
    }
  }
`;

export const ResultDescText = styled.p`
  display: flex;
  text-align: center;
  font-family: 'Jua', sans-serif;
  font-size: 16px;
  margin: 30px 0;
`;

export const ResultResetBtn = styled(Button)`
  padding: 10px 20px;
  font-size: 13px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
`;
