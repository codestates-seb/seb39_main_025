import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  FormUserInfo,
  FormContainer,
  FormTitle,
  FormWrapper,
  FormRow,
  FormInput,
  FormSubmitBtn,
  FormLabelText,
  FormFile,
} from './MyPageFormStyles';

function MyPageForm() {
  const token = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');
  const params = useParams();

  const [userInfo, setuserInfo] = useState({
    memberId: userId,
    email: '',
    password: '',
    username: '',
  });

  console.log(userId);
  console.log(token);

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userInfo,
    };
    console.log(body);
    const res = await axios.patch(
      `https://57a5-49-169-198-207.jp.ngrok.io/api/users/${params.userId}`,
      body,
      { headers: { Authorization: token } },
    );
    console.log(res.data);
  };

  return (
    <FormUserInfo>
      <FormContainer>
        <FormTitle>회원정보</FormTitle>
        <FormWrapper onChange={onChange} onSubmit={onSubmit}>
          <div className="form-div">
            <FormRow>
              <FormFile>
                프로필
                <FormInput type="file" id="profile" name="profile" />
              </FormFile>
            </FormRow>
            <FormRow>
              <FormLabelText>이메일</FormLabelText>
              <FormInput type="email" id="email" name="email" />
            </FormRow>
            <FormRow>
              <FormLabelText>비밀번호</FormLabelText>
              <FormInput type="password" id="password" name="password" />
            </FormRow>
            <FormRow>
              <FormLabelText>이름</FormLabelText>
              <FormInput type="text" id="username" name="username" />
            </FormRow>
          </div>
          <FormSubmitBtn type="submit" yellow big>
            회원 정보 수정 하기
          </FormSubmitBtn>
        </FormWrapper>
      </FormContainer>
    </FormUserInfo>
  );
}

export default MyPageForm;
