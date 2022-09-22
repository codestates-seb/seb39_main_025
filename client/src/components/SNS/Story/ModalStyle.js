import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalLayout = styled(ReactModal)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    height: 100vh;
  }
`;

export const ModalContainer = styled.section`
  /* 모달창의 컨텐츠 영역. */
  position: relative;
  width: 50%;
  max-width: 670px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: #000;

  img {
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 479px) {
    width: 100vw;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ModalHeader = styled.header`
  background-color: transparent;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 95%;

  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  line-height: 1;
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
  }

  h3 {
    color: #fff;
    margin: 0;
    padding: 0;
  }

  span {
    font-size: 13px;
    color: #e5e5e5;
  }

  @media screen and (max-width: 479px) {
    column-gap: 5px;
    padding: 10px;
    width: 100%;
    h3 {
      font-size: 14px;
    }
  }
`;

export const ModalCloseBtn = styled.button`
  right: 70px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  svg {
    font-size: 25px;
  }

  @media screen and (max-width: 479px) {
    margin-left: 220px;
    svg {
      font-size: 25px;
    }
  }
`;

export const DmInputForm = styled.form`
  /* story 하단부 dm 입력창 전체의 form태그 */
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 95%;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 479px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 60px;
  background-color: transparent;
  border: 2px solid #e5e5e5;
  border-radius: 70px;
  bottom: 10px;

  ::placeholder {
    color: #fff;
    padding-left: 20px;
  }

  @media screen and (max-width: 479px) {
    width: 85%;
    height: 40px;
  }
`;

export const DmSubmitBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
`;
