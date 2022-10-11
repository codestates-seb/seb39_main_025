import styled from 'styled-components';
import { Button } from '../../../GlobalStyle';

// * 1. 컨테이너 크기와 거의 동일한 3가지 개별 분리(어 보이는) 된 폼 전체의 form태그
export const FormUserInfo = styled.div`
  background-color: #f9c790;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  margin: auto;
  min-width: 375px;
  box-sizing: border-box;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
    padding: 20px 20px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 100px;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const FormTitle = styled.h1`
  width: 100%;
  font-size: 20px;
  border-left: 2px solid #1d3561;
  padding: 3px 20px;
  color: #1d3561;
`;

export const FormWrapper = styled.form`
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;

  .form-div {
    width: 100%;

    .address-box {
      width: 100%;
      display: grid;
      align-items: center;
      grid-template-columns: 9fr 1fr;
      grid-template-rows: 35px;
    }
    .address-button {
      cursor: pointer;
      background-color: #1d3561;
      color: #efac59;
      padding: 0px 10px;
      height: 30px;
      border-radius: 5px;
      border: none;
      font-size: 1rem;
      @media screen and (max-width: 479px) {
        width: 100px;
      }
    }
  }
  .radio-box input {
    margin-right: 10px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 20px;
`;

export const FormFile = styled.div`
  width: 150px;
  border-radius: 100px;
  overflow: hidden;
  color: #1d3561;
  background-color: #fff;
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;
  :hover {
    transition: 1s;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .profile {
    margin: auto;
    text-align: center;
    line-height: 150px;
  }

  #profile {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

export const FormLabelText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1d3561;
`;

export const FormInput = styled.input`
  margin-top: 3px;
  width: 100%;
  height: 30px;
  border: none;
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
  font-size: 1rem;
  color: #fff;
`;
