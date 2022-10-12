import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
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

function LoginForm({ isLogin, setIsLogin, checkLoginStatus }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    username: '',
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
    if (!res.payload) return alert('회원정보를 확인해주세요');

    setIsLogin(true);
    const username = await JSON.parse(res.payload.config.data).username;
    localStorage.setItem('username', username);
    return navigate('/');
  };

  const guestSubmit = async (e) => {
    e.preventDefault();
    const guestInfo = {
      email: 'testdog@email.com',
      username: '게스트댕댕이',
      password: 'asdfghA1@',
    };
    const res = await dispatch(loginUser(guestInfo));
    if (!res.payload) return alert('회원정보를 확인해주세요');

    setIsLogin(true);
    const username = await JSON.parse(res.payload.config.data).username;
    localStorage.setItem('username', username);
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
            로그인하기
          </FormSubmitBtn>
          <div>
            <button type="button" onClick={guestSubmit}>
              게스트 계정으로 체험하기
            </button>
          </div>
        </FormWrapper>
      </FormContainer>
    </FormLayout>
  );
}

export default LoginForm;
