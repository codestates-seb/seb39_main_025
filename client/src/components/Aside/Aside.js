import React from 'react';
import { AsideLayout, AsideTopBtnBox } from './AsideStyle';
import UpLoadBtnImage from '../../assets/upload.png';

function Aside() {
  const handleOpenModal = () => {
    const uploadModalOpen = true;
    localStorage.setItem('uploadModalOpen', uploadModalOpen);
  };

  return (
    <AsideLayout>
      <AsideTopBtnBox>
        <button type="button" onClick={handleOpenModal}>
          <img src={UpLoadBtnImage} alt="upload-button" />
        </button>
      </AsideTopBtnBox>
    </AsideLayout>
  );
}

export default Aside;
