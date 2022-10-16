import React from 'react';
import BackgrounImage from '../components/Mypage/BackgrounImage';
import MypageInfo from '../components/Mypage/MypageInfo';
import AsideMenu from '../components/Nav/AsideMenu';

function MyPage() {
  return (
    <>
      <BackgrounImage />
      <div style={{ display: 'flex' }}>
        <AsideMenu />
        <MypageInfo />
      </div>
    </>
  );
}

export default MyPage;
