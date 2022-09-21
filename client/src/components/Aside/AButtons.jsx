import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SnsUploadForm from '../Form/sns/SnsUploadForm';
import { AsideTopBtnBox, AsideTopButton, UserProfile } from './AsideStyle';
import UpLoadBtnImage from '../../assets/upload.png';
import HomeIconImage from '../../assets/main.png';

function AButtons() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AsideTopBtnBox>
      <AsideTopButton type="button" onClick={handleOpenModal}>
        <img src={UpLoadBtnImage} alt="upload-button" />
      </AsideTopButton>
      <AsideTopButton type="button" onClick={() => navigate('/mypage')}>
        <UserProfile
          className="user"
          src="https://images.mypetlife.co.kr/content/uploads/2021/06/07161807/sq-lim-k4vhuUHv08o-unsplash-1024x683.jpg"
          alt="user profile"
        />
      </AsideTopButton>
      <AsideTopButton type="button" onClick={() => navigate('/')}>
        <img src={HomeIconImage} alt="upload-button" />
      </AsideTopButton>
      <SnsUploadForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
      />
    </AsideTopBtnBox>
  );
}

export default AButtons;
