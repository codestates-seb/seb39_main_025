import styled from 'styled-components';
import { Carousel, Card } from 'antd';

export const SingleFeedImageLayout = styled.div`
  height: auto;
  position: relative;
`;
export const ImagCard = styled(Card)`
  & .ant-card-body {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  & .dnobrT .slick-slide {
    /* z-index: -1; */
  }
`;
export const CarouselWrapper = styled(Carousel)`
  div {
    width: 100%;
    max-width: 500px;

    @media screen and (max-width: 479px) {
      width: 100%;
    }
    & img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }
  .slick-dots {
    z-index: 0;
  }

  .slick-dots li button {
    background: #aaa;
    opacity: 1;
  }
  .slick-dots li.slick-active button {
    background: #1d3561;
  }
`;
