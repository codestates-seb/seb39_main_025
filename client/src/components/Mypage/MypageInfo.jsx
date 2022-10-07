import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './MypageInfoStyle';
import Profile from '../../assets/profile.png';

function MypageInfo() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const token = window.localStorage.getItem('accessToken');
  const userId = window.localStorage.getItem('userId');

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await axios.get(
        `https://server.staybuddy.net/api/users/${userId}`,
        { headers: { userId, Authorization: token } },
      );
      setUser(res.data);
    };
    getUserInfo();
  }, []);

  return (
    <S.MyInfoLayout>
      <h1>나의 계정</h1>
      <S.MyInfoBox>
        <h3>회원 정보</h3>
        <S.MyInfoFlex>
          <img src={Profile} alt="" />
          <div>
            <p>이름:{user.username} </p>
            <p>봉사자: </p>
            <p>마이버디: </p>
          </div>
        </S.MyInfoFlex>
      </S.MyInfoBox>
      <S.MobileButton onClick={() => navigate('/mypage-edit')}>
        회원정보 수정
      </S.MobileButton>
    </S.MyInfoLayout>
  );
}

export default MypageInfo;
