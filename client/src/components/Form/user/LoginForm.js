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

function LoginForm() {
  return (
    <FormLayout>
      <FormContainer>
        <FormLogoBox>
          <FormLogoImg src={Logo} alt="logo" />
        </FormLogoBox>
        <FormTitle>로그인</FormTitle>
        <FormWrapper>
          <FormRow>
            <FormLabelText>아이디</FormLabelText>
            <FormInput type="text" id="userId" name="userId" />
          </FormRow>

          <FormRow>
            <FormLabelText>비밀번호</FormLabelText>
            <FormInput type="password" id="password" name="password" />
          </FormRow>

          <FormSubmitBtn type="submit" yellow big>
            로그인하기
          </FormSubmitBtn>
        </FormWrapper>
      </FormContainer>
    </FormLayout>
  );
}

export default LoginForm;
