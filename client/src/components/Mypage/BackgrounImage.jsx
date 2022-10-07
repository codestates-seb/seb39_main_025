import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css';
import styled from 'styled-components';
import mypageOne from '../../assets/mypage.png';
import mypageTwo from '../../assets/mypage_2.png';
import mypageThree from '../../assets/mypage_3.png';

function BackgrounImage() {
  const mypageBackground = [
    { id: 0, image: mypageOne },
    { id: 0, image: mypageTwo },
    { id: 0, image: mypageThree },
  ];

  return (
    <BackgroundLayout autoplay fade>
      {mypageBackground.map(({ id, image }) => {
        return (
          <div key={id}>
            <img src={image} alt={image} />
          </div>
        );
      })}
    </BackgroundLayout>
  );
}

export default BackgrounImage;

const BackgroundLayout = styled(Carousel)`
  width: 100%;
  height: 500px;
  margin: auto;
  & div {
    width: 100%;
    height: 100%;
    text-align: center;
    & img {
      object-fit: cover;
    }
  }
  @media screen and (max-width: 479px) {
    & div {
      margin: auto;
      img {
        object-fit: fill;
      }
    }
  }
`;
