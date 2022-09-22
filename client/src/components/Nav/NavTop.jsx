import React, { useState } from 'react';
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
      <NavButton>
        <NavButtonLogin onClick={() => navigate('/login')} type="button">
          login
        </NavButtonLogin>
        <NavButtonRegister
          yellow
          onClick={() => navigate('/sign-up')}
          type="button"
        >
          register
        </NavButtonRegister>
      </NavButton>
    </NavTopLayout>
  );
}

export default NavTop;
