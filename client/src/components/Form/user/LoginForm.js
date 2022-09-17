import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/userSlice';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    userId: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(loginUser(userInfo));
    console.log(res);
    return navigate('/');
  };

  return (
    <FormLayout>
      <FormContainer>
        <FormLogoBox>
          <FormLogoImg src={Logo} alt="logo" />
        </FormLogoBox>
        <FormTitle>로그인</FormTitle>
        <FormWrapper onChange={onChange} onSubmit={onSubmit}>
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
