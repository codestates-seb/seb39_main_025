import styled from 'styled-components';
import { Carousel, Card } from 'antd';
import { Button } from '../../../GlobalStyle';

export const FormLayout = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 479px) {
    height: 90vh;
  }
`;

export const FormContainer = styled.div`
  color: black;
  border-radius: 20px;
  border: 1px solid #1d3561;
  background-color: #fff;
  width: 1000px;
  height: 600px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 120px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    position: fixed;
    bottom: 0;
  }
`;

export const FormHeader = styled.div`
  padding: 0 30px;
  width: 100%;
  height: 30px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;

  h1 {
    font-weight: 500;
    font-size: 13px;
    color: #1d3561;
  }

  span {
    font-weight: 500;
    font-size: 13px;
  }
`;

export const HeaderReturnBtnBox = styled.div`
  cursor: pointer;

  img {
    width: 11px;
  }
`;

export const HeaderShareBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 500;
`;

// 미리보기 이미지 영역 박스
// export const FormPrevImgBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px;
//   position: absolute;

//   > img {
//     border-radius: 10px;
//     opacity: 0;

//     &.show {
//       opacity: 1;
//       width: 50%;
//       transition: 0.5s;
//     }
//   }
//   @media screen and (max-width: 479px) {
//   }
// `;

export const SingleFeedImageLayout = styled.div`
  width: auto;
  height: 350px;
  position: relative;
`;
export const ImagCard = styled(Card)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;

  &.show {
    opacity: 1;
    z-index: 2;
  }
`;
export const CarouselWrapper = styled(Carousel)`
  & img {
    width: 100%;
    height: 568px;
    object-fit: cover;

    @media screen and (max-width: 479px) {
      height: 355px;
    }
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

// export const PrevCarousel = styled(Carousel)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   z-index: 1;

//   & img {
//     width: 100%;
//     height: 350px;
//     object-fit: cover;
//     opacity: 0;

//     &.show {
//       opacity: 1;
//       transition: 0.5s;
//     }
//   }
//   .slick-dots li button {
//     background: #aaa;
//     opacity: 1;
//   }
//   .slick-dots li.slick-active button {
//     background: #1d3561;
//   }
// `;

export const FormLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 479px) {
    width: 50%;
  }
`;

export const FormTitle = styled.h1`
  margin-top: 5%;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 16px;

  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;

export const FormLeftBox = styled.div`
  position: relative;

  border-top: 1px solid #efac59;
  border-left: 1px solid #efac59;
  border-right: 1px solid #efac59;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 160%;
  }
`;

// * 입력폼 우측 컴포넌트들
export const FormRightBox = styled.div`
  border-top: 1px solid #efac59;

  width: 40%;
  height: 100%;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

// 1. 유저정보 전체 div 박스
export const FormRightUserInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  padding-left: 10px;
`;

// 1.1 프사 img태그
export const UserProfilePic = styled.img`
  border-radius: 50%;
  border: 1px solid black;
  width: 30px;
`;

// 1.2 유저이름
export const UserName = styled.h3`
  font-size: 12px;
`;

// 2. 우측 가운데 텍스트 입력창 영역설정 div 박스
export const FormTextInputBox = styled.div`
  border-bottom: 1px solid #efac59;
  width: 100%;
  height: 40%;

  /* 2.1 텍스트 입력창 스타일링. 태그: textarea */
  textarea {
    border: none;
    padding: 10px;
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 479px) {
    border-bottom: none;
  }
`;

// 2.2 위치정보, 태그 등 우측 중앙 div 박스
export const FormRightMidBox = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #efac59;
  display: flex;
  align-items: center;

  span {
    font-size: 13px;
    font-weight: 500;
    padding: 10px;
  }

  @media screen and (max-width: 479px) {
    border-bottom: none;
    border-top: 1px solid #efac59;
  }
`;

export const FormDropperBox = styled.div`
  color: #1d3561;
  font-weight: 100;
  font-size: 16px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  :hover {
    background-color: #bebebe;
    transition: 0.5s;
    color: #fff;
  }
  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`;

export const FileDropIconBox = styled.div`
  margin-bottom: 30px;
  img {
  }
`;

export const FormLabelText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1d3561;
`;

export const FormInput = styled.input`
  margin-top: 3px;
  width: 250px;
  height: 23px;
  border: 1px solid #1d3561;
`;

export const FormSubmitBtn = styled(Button)`
  /*
  역할: 회원가입 폼 제출버튼 
  스타일링: GlobalStyle의 Button 확장으로 받아와 스타일을 덮어씌웁니다.
  */
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  font-size: 13px;
  color: #fff;
  border-radius: 10px;
  border: none;
`;
