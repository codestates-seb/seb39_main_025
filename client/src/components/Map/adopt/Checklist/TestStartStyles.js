import styled from 'styled-components';
import { Button } from '../../../../GlobalStyle';

export const CoverLayout = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 479px) {
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const CoverTitleBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CoverTitleText = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Jua', sans-serif;
  font-size: 30px;

  @media screen and (max-width: 479px) {
    font-size: 25px;
  }
`;

/* 이미지영역 */
export const CoverImageBox = styled.div`
  width: 300px;
  height: 200px;

  @media screen and (max-width: 479px) {
    width: 200px;
  }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CoverDescSpan = styled.span`
  margin: 10px;
  font-family: 'Jua', sans-serif;
`;

/* 하단 버튼영역 */
export const StartBtnBox = styled.div`
  position: relative;
  bottom: 0;
`;

export const StartBtn = styled(Button)`
  border-radius: 70px;
  font-weight: 400;

  @media screen and (max-width: 479px) {
    width: 150px;
    font-size: 13px;
    padding: 5px 10px;
    margin-bottom: 10px;
  }
`;
