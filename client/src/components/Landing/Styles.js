import styled from 'styled-components';
import { Button } from '../../GlobalStyle';
import './scroll.css';

export const LandingContentLayout = styled.div`
  width: 100%;
  a {
    color:#fff;
  }
  @media screen and (max-width: 479px) {
    padding: 0px 10px;
  }
  .second {
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
      flex-direction: column-reverse;
    }
    & .sns-text {
      h2 {
        margin-top: 150px;
        font-size: 2.3rem;
        color: #1d3561;
        text-align: center;
        @media screen and (max-width: 479px) {
          font-size: 1.5rem;
          margin-top: 50px;
        }
      }
      p {
        padding-left: 10px;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #efac59;
        @media screen and (max-width: 1000px) {
          justify-content: center;
        }
        @media screen and (max-width: 479px) {
          font-size: 0.9rem;
        }
      }
    }
    & .sns-button {
      display: block;
      text-align: center;
      margin: auto;
      margin-top: 50px;
    }
  }
  & .sns-div {
    width: 477px;
    height: 640px;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (max-width: 1000px) {
      margin-top: 150px;
    }
    @media screen and (max-width: 479px) {
      width: 100%;
      margin-bottom: 0px;
      img {
        width: 100%;
        
      }
    }
  }
  & .sns-box {
    width: 255px;
    height: 450px;
    overflow: hidden;
    position: absolute;
    top: 50px;
    left: 0;
    right: 30px;
    margin: auto;
    @media screen and (max-width: 479px) {
  
      width: 220px;
      height: 400px;
      img {
        width: 100%;
    
      }
    }
    @media screen and (max-width: 375px) {
      width: 180px;
      height: 300px;
      img {
        width: 100%;
      }
    }
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
    @media screen and (max-width: 479px) {
      margin-top: 50px;
      }
    & h5 {
      font-size: 3rem;
      @media screen and (max-width: 479px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1rem;
      @media screen and (max-width: 479px) {
        font-size: 0.8rem;
      }
    }
    & .alert {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #efac59;
      @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        gap: 100px;
      
      }
      @media screen and (max-width: 479px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
      @media screen and (max-width: 375px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    & .adopt {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      color: #415c8e;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 100px;
      }
      @media screen and (max-width: 479px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
      @media screen and (max-width: 375px) {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
`;

/* 스토리즈 아래 나머지 랜딩페이지 영역 확인용 레이아웃 임시 스타일링입니다. */
export const ContentLayout = styled.div`
  border-radius: 10px;
  background-color: #efac59;
  width: 100%;
  position: relative;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const LandingTitleDesc = styled.div`
  z-index: 1;
  width: 300px;
`;

export const LandingText = styled.div`
  color: #1d3561;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 10rem;
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 479px) {
  }
`;

export const LandingTitleBottom = styled.div`
  z-index: 1;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ScrollWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
  @media screen and (max-width: 375px) {
    width: 300px;
  }
`;

export const SigninBtn = styled(Button)`
  margin-bottom: 1rem;
  border: 0.01px solid #fff;
  color: #1d3561;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
`;
