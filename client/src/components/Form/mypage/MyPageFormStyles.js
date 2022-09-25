import styled from 'styled-components';
import { Button } from '../../../GlobalStyle';

// * 1. 컨테이너 크기와 거의 동일한 3가지 개별 분리(어 보이는) 된 폼 전체의 form태그
export const FormUserInfo = styled.div`
  background-color: #f9c790;
  width: 100%;
  min-width: 400px;
  height: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    height: 90vh;
  }
`;

export const FormContainer = styled.div`
  color: black;
  border: 1px solid #efac59;
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 479px) {
    width: 300px;
    height: 600px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 20px;
  border-left: 2px solid #1d3561;
  background-color: #fff;
  padding: 10px;
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
  background-color: #ddd;
  .form-div {
    width: 100%;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 10px;
`;

export const FormFile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  overflow: hidden;
  color: #1d3561;
  background-color: #eee;
  position: relative;
  z-index: 2;
  :hover {
    transition: 1s;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .profile {
    margin: auto;
    text-align: center;
    line-height: 90px;
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
`;
