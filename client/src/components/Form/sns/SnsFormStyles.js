import styled from 'styled-components';
import ReactModal from 'react-modal';

import { Carousel, Card } from 'antd';
import { Button } from '../../../GlobalStyle';

// * 전체영역 레이아웃
export const ModalBackDrop = styled(ReactModal)`
  /* sns 업로드 폼 모달 컴포넌트의 최상위 요소로, 모달창이 
화면 정 가운데 오도록 flex 부모가 되며 뒷배경 블러 처리하는 레이아웃입니다. */
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    height: 90vh;
  }
`;

// * 모달창의 컨테이너
export const FormContainer = styled.div`
  /* 입력폼 컨텐츠를 감싸는 컨테이너입니다. */
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

// * 모달창 내부 헤더 상단바
export const FormHeader = styled.header`
  /* 입력폼 안 맨 윗단 뒤로가기, 제목, 업로드버튼을 가진 상단바 입니다 */
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
  /* 헤더 상단바 내부 뒤로가기 버튼 영역의 div 박스입니다. img 태그 하나로 대체 가능할것도 같습니다. */
  cursor: pointer;

  img {
    width: 11px;
  }
`;

export const HeaderShareBtn = styled.button`
  /* 헤더 상단바의 제출버튼 스타일링입니다. */
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 500;
`;

// * form태그 - 입력영역 전체 스타일링
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

// * form 태그영역 내부의 좌측 이미지 업로드 영역 전체 div box
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

export const ImagCard = styled(Card)`
  /* 캐러셀 기능 구현 시 캐러셀 영역 최상위 요소입니다. */
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
  /* 여러 이미지 미리보기 시 각각의 이미지 스타일링을 위한 wrapper입니다. */
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

export const FormDropperBox = styled.div`
  /* 사진 업로드를 위한 클릭영역의 div박스입니다. asset의 이미지와 설명문구, 버튼을 감싸고 있습니다. */
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
  /* assets의 파일드랍영역 이미지 삽입을 위한 div 박스입니다. */
  margin-bottom: 30px;
  img {
  }
`;

export const UploadAreaBtn = styled(Button)`
  /*
    클릭하여 사진을 업로드 할 수 있는 드랍박스 영역 내부의 버튼입니다.
    버튼 클릭시에도 파일을 선택할 수 있는 기능을 구현하려고 했으나 잘 안되네요..
    TODO: 버튼 클릭시에도 파일 선택창 뜨도록 수정예정 (가능하면)
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

// * 입력폼 우측 컴포넌트들
export const FormRightBox = styled.div`
  border-top: 1px solid #efac59;

  width: 40%;
  height: 100%;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const FormRightUserInfo = styled.div`
  /* 1. 유저정보 전체 div 박스 */
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  padding-left: 10px;
`;

export const UserProfilePic = styled.img`
  /* 1.1 프사 img태그 */
  border-radius: 50%;
  border: 1px solid black;
  width: 30px;
`;

export const UserName = styled.input`
  /* 1.2 유저이름 */
  font-size: 15px;
  border: none;
  outline: none;
`;

// * 2. 입력폼 우측의 가운데 텍스트 입력창 영역설정 div 박스
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

export const FormRightMidBox = styled.div`
  /* 2.2 위치정보, 태그 등 우측 중앙 div 박스 */
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
