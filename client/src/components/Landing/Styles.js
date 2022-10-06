import styled from 'styled-components';
import './scroll.css';

export const LandingContentLayout = styled.div`
  width: 100%;
  .second {
    margin-top: 100px;
    display: flex;
    justify-content: space-evenly;
    & .sns-text {
      h2 {
        margin-top: 200px;
        font-size: 2.3rem;
        color: #1d3561;
      }
      p {
        padding-left: 10px;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #efac59;
      }
    }
  }
  & .sns-div {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 477px;
    height: 640px;
    position: relative;
    overflow: hidden;
    & .sns-box {
      width: 255px;
      height: 450px;
      overflow: hidden;
      position: absolute;
      top: 50px;
      left: 0;
      right: 30px;
      margin: auto;
    }
    & .sns-page {
      position: absolute;
      z-index: -1;
      animation: sns 6s ease-out infinite;
    }
  }
  & .third {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    & h5 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
    & .alert {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #efac59;
    }
    & .adopt {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      color: #415c8e;
    }
  }
`;

/* 스토리즈 아래 나머지 랜딩페이지 영역 확인용 레이아웃 임시 스타일링입니다. */
export const ContentLayout = styled.div`
  border-radius: 10px;
  background-color: #efac59;
  width: 100%;
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const LandingText = styled.div`
  color: #1d3561;
  font-size: 5rem;
  font-weight: 500;
  margin-top: 2rem;
`;
