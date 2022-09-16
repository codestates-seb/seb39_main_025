import React from 'react';
import { Button } from '../../GlobalStyle';
import {
  NavTopLayout,
  MainLogo,
  NavSearchInput,
  NavIconBox,
  NavButton,
} from './NavStyle';
import Logo from '../../assets/logo.png';

import SearchIcon from '../../assets/icons_search.png';

function NavTop() {
  return (
    <NavTopLayout>
      <MainLogo>
        <img src={Logo} alt={Logo} />
      </MainLogo>
      <NavSearchInput>
        <input type="text" className="nav-search-input" />
      </NavSearchInput>
      <NavIconBox>
        <img src={SearchIcon} alt={SearchIcon} className="nav-search-icon" />
      </NavIconBox>
      <NavButton>
        <Button> login </Button>
      </NavButton>
    </NavTopLayout>
  );
}

export default NavTop;
