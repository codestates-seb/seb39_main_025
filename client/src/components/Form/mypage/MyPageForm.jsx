import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
  // const user = useSelector((state) => state.user);
  const token = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');

  const params = useParams();

  const [userInfo, setuserInfo] = useState({
    email: '',
    password: '',
    username: '',
    userId,
  });
  console.log(params.userId);
  console.log(userId);
  console.log(token);

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await axios.get(
        `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/users/${params.userId}`,
        { headers: { userId: params.userId, Authorization: token } },
      );
      setuserInfo(res.data);
      console.log(res.data);
    };
    getUserInfo();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.patch(
      `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/users/${params.userId}`,
      userInfo,
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
                <FormInput
                  type="file"
                  id="profile"
                  name="profile"
                  onChange={onChange}
                />
              </FormFile>
            </FormRow>
            <FormRow>
              <FormLabelText>이메일</FormLabelText>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={userInfo.email}
                onChange={onChange}
              />
            </FormRow>
            <FormRow>
              <FormLabelText>비밀번호</FormLabelText>
              <FormInput type="password" id="password" name="password" />
            </FormRow>
            <FormRow>
              <FormLabelText>이름</FormLabelText>
              <FormInput
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={onChange}
              />
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
