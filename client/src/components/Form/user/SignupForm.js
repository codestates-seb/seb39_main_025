import React from 'react';
import Logo from '../../../assets/logo.png';

import {
  FormLayout,
  FormContainer,
  FormLogoBox,
  FormLogoImg,
  FormTitle,
  FormWrapper,
  FormRow,
  FormLabelText,
  FormInput,
  FormSubmitBtn,
} from '../FormStyles';

function Form() {
  return (
    <FormLayout>
      <FormContainer>
        <FormLogoBox>
          <FormLogoImg src={Logo} alt="logo" />
        </FormLogoBox>
        <FormTitle>회원가입</FormTitle>
        <FormWrapper>
          <FormRow>
            <FormLabelText>메일주소</FormLabelText>
            <FormInput type="email" id="email" name="email" />
          </FormRow>
          <FormRow>
            <FormLabelText>닉네임</FormLabelText>
            <FormInput type="text" id="username" name="username" />
          </FormRow>
          <FormRow>
            <FormLabelText>비밀번호</FormLabelText>
            <FormInput type="password" id="password" name="password" />
          </FormRow>
          <FormRow>
            <FormLabelText>비밀번호 확인</FormLabelText>
            <FormInput
              type="password"
              id="confirm-password"
              name="confirmPassword"
            />
          </FormRow>
          <FormSubmitBtn type="submit" yellow big>
            회원 가입 하기
          </FormSubmitBtn>
        </FormWrapper>
      </FormContainer>
    </FormLayout>
  );
}

export default Form;
