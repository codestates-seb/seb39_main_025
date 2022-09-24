import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
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
    email: '',
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
    // TODO: 일반 axios 요청 대신 리덕스 썽크 사용 방식으로 개선
    // axios
    //   .post(`https://dec4-49-169-198-207.jp.ngrok.io/login`, userInfo)
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.headers.authorization);
    //     const accessToken = response.headers.authorization;
    //     console.log(accessToken);
    //     localStorage.setItem('accessToken', accessToken);
    //     console.log(localStorage.accessToken);
    //     const loginStatus = true;
    //     localStorage.setItem('loginStatus', loginStatus);
    //     axios.defaults.headers.common['Authorization'] = `${accessToken}`;
    const res = dispatch(loginUser(userInfo));
    console.log(res);
    navigate('/');

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
