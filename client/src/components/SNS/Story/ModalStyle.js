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
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: #0005;
  background-blend-mode: darken; */

  img {
    /* width: 100%;
    height: 100%; */
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
`;

export const UserInfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  color: #fff;
  line-height: 1;

  @media screen and (max-width: 479px) {
    padding: 10px;
    width: max-content;
  }

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
`;

export const ModalCloseBtn = styled.button`
  right: 70px;
  width: 50px;
  height: 50px;
  margin-left: 540px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  svg {
    font-size: 25px;
  }

  @media screen and (max-width: 479px) {
    margin-left: 200px;
    svg {
      font-size: 25px;
    }
  }
`;

export const DmInputForm = styled.form`
  /* story 하단부 dm 입력창 전체의 form태그 */
  position: absolute;
  bottom: 40px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 479px) {
  }
`;

export const Input = styled.input`
  width: 600px;
  height: 60px;
  background-color: transparent;
  border: 2px solid #e5e5e5;
  border-radius: 70px;
  bottom: 10px;
  margin-left: 30px;

  ::placeholder {
    color: #fff;
    padding-left: 20px;
  }

  @media screen and (max-width: 479px) {
    width: 300px;
    height: 40px;
  }
`;

export const DmSubmitBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  margin-left: 15px;
`;
