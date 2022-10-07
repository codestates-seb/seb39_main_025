import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavTopLayout,
  MainLogo,
  NavButton,
  LogoutButton,
  NavButtonLogin,
  NavButtonRegister,
} from './NavTopStyle';
import Logo from '../../assets/logo.png';

function NavTop({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // 로컬스토리지 초기화
    setIsLogin(false);
    return window.location.reload();
  };

  return (
    <NavTopLayout>
      <MainLogo onClick={() => navigate('/')}>
        <img src={Logo} alt={Logo} />
      </MainLogo>

      <NavButton>
        {isLogin === true || localStorage.loginStatus === 'true' ? (
          <LogoutButton
            type="button"
            onClick={handleLogout}
            className="logout-button"
          >
            로그아웃
          </LogoutButton>
        ) : (
          <>
            <NavButtonLogin onClick={() => navigate('/login')} type="button">
              로그인
            </NavButtonLogin>
            <NavButtonRegister
              yellow
              onClick={() => navigate('/sign-up')}
              type="button"
            >
              회원가입
            </NavButtonRegister>
          </>
        )}
      </NavButton>
    </NavTopLayout>
  );
}

export default NavTop;
