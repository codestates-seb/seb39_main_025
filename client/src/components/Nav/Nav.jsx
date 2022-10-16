import React from 'react';
import { NavLayout } from './NavTopStyle';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

function Nav({ isLogin, setIsLogin, checkLoginStatus }) {
  return (
    <NavLayout>
      <NavTop
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        checkLoginStatus={checkLoginStatus}
      />
      <NavBottom />
    </NavLayout>
  );
}

export default Nav;
