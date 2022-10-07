import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import DaumAddress from './DaumAddress';

function MyPageForm() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');

  const [userInfo, setuserInfo] = useState({
    password: '',
    username: '',
    userId,
    dogname: '',
    pet: '',
    address: '',
  });

  const [popup, setPopup] = useState(false);

  const handleComplete = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };

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
        `https://server.staybuddy.net/api/users/${userId}`,
        { headers: { userId, Authorization: token } },
      );
      setuserInfo(res.data);
    };
    getUserInfo();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!localStorage.accessToken) {
      alert('로그인 후 이용해주세요');
      return navigate('/login');
    }
    const res = await axios.patch(
      `https://server.staybuddy.net/api/users/${userId}`,
      userInfo,
      { headers: { Authorization: token } },
    );
    return alert(`${res.data.message}`);
  };

  return (
    <FormUserInfo>
      <FormContainer>
        <FormWrapper onChange={onChange} onSubmit={onSubmit}>
          <FormTitle>회원정보</FormTitle>
          <div className="form-div">
            <FormRow>
              <FormFile>
                <FormLabelText className="profile"> 프로필</FormLabelText>
                <FormInput
                  type="file"
                  id="profile"
                  name="profile"
                  onChange={onChange}
                />
              </FormFile>
            </FormRow>
            <FormRow>
              <FormLabelText>비밀번호</FormLabelText>
              <FormInput type="password" id="password" name="password" />
            </FormRow>
            <FormRow>
              <FormLabelText>닉네임</FormLabelText>
              <FormInput
                type="text"
                id="username"
                name="username"
                value={userInfo.username}
                onChange={onChange}
              />
            </FormRow>
          </div>
          <FormTitle>반려동물 정보</FormTitle>
          <div className="form-div">
            <FormRow>
              <FormLabelText>반려동물 이름 </FormLabelText>
              <FormInput
                type="text"
                id="dogname"
                name="dogname"
                value={userInfo.dogname}
                onChange={onChange}
              />
            </FormRow>
            <FormRow className="radio-box">
              <FormLabelText> 구분 </FormLabelText>
              <label htmlFor="radio">
                유기견
                <input
                  type="radio"
                  id="stray"
                  name="pet"
                  value={userInfo.pet}
                />
              </label>
              <label htmlFor="radio">
                유기묘
                <input type="radio" id="cat" name="pet" value={userInfo.pet} />
              </label>
              <label htmlFor="radio">
                그외
                <input
                  type="radio"
                  id="other"
                  name="pet"
                  value={userInfo.pet}
                />
              </label>
            </FormRow>
          </div>
          <FormTitle>유기동물 봉사자 정보</FormTitle>
          <div className="form-div">
            <FormRow className="address-form">
              <FormLabelText>센터 주소</FormLabelText>
              <div className="address-box">
                <FormInput
                  type="text"
                  id="address"
                  name="address"
                  value={userInfo.address}
                  onChange={onChange}
                />
                <button
                  className="address-button"
                  type="button"
                  onClick={handleComplete}
                >
                  주소찾기
                </button>
              </div>
              {popup && (
                <DaumAddress company={userInfo} setcompany={setuserInfo} />
              )}
            </FormRow>
          </div>

          <FormSubmitBtn type="submit" big>
            회원 정보 수정 하기
          </FormSubmitBtn>
        </FormWrapper>
      </FormContainer>
    </FormUserInfo>
  );
}

export default MyPageForm;
