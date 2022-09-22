import React from 'react';
import { NavLayout } from './NavTopStyle';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

function Nav() {
  return (
    <NavLayout>
      <NavTop />
      <NavBottom />
    </NavLayout>
  );
}

export default Nav;
