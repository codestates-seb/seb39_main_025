import React from 'react';
import { NavTopLayout, MainLogo } from './NavStyle';
import Logo from '../../assets/logo.png';

function NavTop() {
  return (
    <NavTopLayout>
      <MainLogo src={Logo} alt={Logo} />
    </NavTopLayout>
  );
}

export default NavTop;
