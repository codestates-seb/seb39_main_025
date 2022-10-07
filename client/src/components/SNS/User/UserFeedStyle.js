import styled from 'styled-components';
import { Card } from 'antd';
import { Container, Button } from '../../../GlobalStyle';

// 개별 소셜 페이지 글로벌 container
export const UserFeedLayout = styled(Container)`
  color: #000;
  /* background-color: #fff; */
  padding: 30px 40px;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 479px) {
    padding: 10px 10px;
  }
`;

export const SnsButton = styled.div`
  display: flex;
  justify-content: end;
`;

// 개별 소셜 페이지: 상단 버튼 바
export const UserFeedTopBarLayout = styled.div`
  display: none;
  width: 100%;
  background-color: #fff;
  padding: 0 10px;
  @media screen and (max-width: 479px) {
    display: block;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    & span {
      font-size: 20px;
    }
    & .right-button {
      display: flex;
      & button {
        margin-right: 10px;
      }
    }
    & button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      margin: 5px;
      height: 40px;
    }
  }
`;

// 개별 소셜 페이지 : 유저 프로필

export const UserFeedPorofileLayout = styled.div`
  border-bottom: solid #1d3561 1px;
  padding-bottom: 2.5rem;
`;

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
export const ProfileCircle = styled.div`
  width: 150px;
  height: 150px;

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 80px;
  }
  border: 3px solid transparent;
  border-radius: 50%;
  overflow: hidden;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #1d3561 0%, orange 100%);
  border-image: linear-gradient(to right, #1d3561 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 479px) {
      border: #fff solid 2px;
    }
    border: #fff solid 5px;
    border-radius: 100%;
  }
`;

export const UserFeedInfoTable = styled.div`
  & table {
    font-size: 25px;
    text-align: center;
    border-collapse: separate;
    border-spacing: 20px 15px;
    @media screen and (max-width: 479px) {
      font-size: 14px;
      border-spacing: 15px 5px;
    }
    & td {
      font-size: 17px;
      @media screen and (max-width: 479px) {
        font-size: 12px;
      }
    }
  }
`;
export const UserFeedBedge = styled.div`
  & img:first-child {
    margin-right: 20px;
    @media screen and (max-width: 479px) {
      margin-right: 5px;
    }
  }
  & img {
    width: 35px;
    @media screen and (max-width: 479px) {
      width: auto;
    }
  }
`;
export const UserContent = styled.div`
  margin-top: 10px;
  & span {
    font-size: 15px;
    font-weight: 700;
    color: #1d3561;
  }
`;

export const FollowingButton = styled(Button)`
  padding: 5px 20px;
  font-weight: 500;
`;

// 갤러리카드
export const UserFeedGalleryLayout = styled.div`
  width: 100%;
`;

export const GalleryCard = styled(Card)`
  overflow: scroll;
  text-align: center;
  border: none;
  margin-bottom: 10rem;
  & .ant-card-head {
    border: none;
  }
  & .card-grid {
    box-sizing: border-box;
    width: 30%;
    height: 30vw;
    text-align: center;
    overflow: hidden;
    margin: 1.6%;
    @media screen and (max-width: 479px) {
      width: 33.333%;
      margin: 0;
    }
  }
  & .ant-card-grid {
    padding: 0;
    @media screen and (max-width: 479px) {
      height: 33.333vw;
      height: 30vw;
      margin: 0;
      border: 1.5px solid #fff;
    }
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
