import React from 'react';
import LoginForm from '../components/Form/user/LoginForm';

function LoginPage({ isLogin, setIsLogin, checkLoginStatus }) {
  return (
    <LoginForm
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      checkLoginStatus={checkLoginStatus}
    />
  );
}

export default LoginPage;
