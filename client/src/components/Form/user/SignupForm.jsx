import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../redux/userSlice';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
    password: '',
    name: '',
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
    const res = dispatch(signUpUser(userInfo));
    console.log(res);
    return navigate('/');
  };

  return (
    <FormLayout>
      <FormContainer>
        <FormLogoBox>
          <FormLogoImg src={Logo} alt="logo" />
        </FormLogoBox>
        <FormTitle>회원가입</FormTitle>
        <FormWrapper onChange={onChange} onSubmit={onSubmit}>
          <FormRow>
            <FormLabelText>이메일</FormLabelText>
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
          <FormSubmitBtn type="submit" yellow big>
            회원 가입 하기
          </FormSubmitBtn>
          <div>
            <button type="button" onClick={() => navigate('/login')}>
              게스트 계정으로 체험하기
            </button>
          </div>
        </FormWrapper>
      </FormContainer>
    </FormLayout>
  );
}

export default Form;
