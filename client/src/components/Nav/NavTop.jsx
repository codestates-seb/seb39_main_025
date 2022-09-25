import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavTopLayout,
  MainLogo,
  NavIconBox,
  NavSearchInput,
  NavSearchClose,
  NavIputBox,
  NavButton,
  NavButtonLogin,
  NavButtonRegister,
  SearchIconImg,
} from './NavTopStyle';
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/icons_search.png';

function NavTop() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbarPopup = () => {
    return setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear(); // 로컬스토리지 초기화
    return window.location.reload();
  };

  const checkIsLogin = () => {
    if (localStorage.loginStatus === 'true')
      return (
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      );

    return (
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
    );
  };

  return (
    <NavTopLayout>
      <MainLogo onClick={() => navigate('/')}>
        <img src={Logo} alt={Logo} />
      </MainLogo>
      <NavIconBox>
        {!isOpen ? (
          <SearchIconImg src={SearchIcon} onClick={handleNavbarPopup} />
        ) : (
          <NavIputBox onClick={(e) => e.stopPropagation()}>
            <NavSearchClose onClick={handleNavbarPopup} yellow>
              🐶
            </NavSearchClose>
            <NavSearchInput />
          </NavIputBox>
        )}
      </NavIconBox>
      <NavButton>{checkIsLogin()}</NavButton>
    </NavTopLayout>
  );
}

export default NavTop;
