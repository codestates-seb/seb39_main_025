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
      <div>
        AWS의 RDS Free tier 사용량이 소진되어 부득이 서버, 데이터베이스를
        종료합니다. 찾아주셔서 감사드립니다. 더 좋은 포폴로 뵙겠습니다.
      </div>
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
