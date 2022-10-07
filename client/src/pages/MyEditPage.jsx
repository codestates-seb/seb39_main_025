import React from 'react';
import BackgrounImage from '../components/Mypage/BackgrounImage';
import MyPageForm from '../components/Form/mypage/MyPageForm';
import AsideMenu from '../components/Nav/AsideMenu';

function MyEditPage() {
  return (
    <>
      <BackgrounImage />
      <div style={{ display: 'flex' }}>
        <AsideMenu />
        <MyPageForm />
      </div>
    </>
  );
}

export default MyEditPage;
