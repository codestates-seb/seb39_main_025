import styled from 'styled-components';
import { Carousel, Card } from 'antd';

export const SingleFeedImageLayout = styled.div`
  height: auto;
  height: 350px;
  position: relative;
`;
export const ImagCard = styled(Card)`
  width: 100%;
  height: 100%;
`;
export const CarouselWrapper = styled(Carousel)`
  & img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  .slick-dots li button {
    background: #aaa;
    opacity: 1;
  }
  .slick-dots li.slick-active button {
    background: #1d3561;
  }
`;

export const SingleFeedImageCounter = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 45px;
  height: 30px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
