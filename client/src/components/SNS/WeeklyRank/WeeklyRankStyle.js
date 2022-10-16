import styled from 'styled-components';
import { Card } from 'antd';

export const WeelyRankLayout = styled.div`
  width: 100%;
`;

export const RankCard = styled(Card)`
  overflow: scroll;
  text-align: center;
  border: none;

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
