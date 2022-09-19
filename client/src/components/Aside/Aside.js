import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AsideLayout, AsideTopBtnBox } from './AsideStyle';
import UpLoadBtnImage from '../../assets/upload.png';

function Aside() {
  const navigate = useNavigate();

  return (
    <AsideLayout>
      <AsideTopBtnBox>
        <button
          type="button"
          onClick={() => {
            navigate('/sns-upload');
          }}
        >
          <img src={UpLoadBtnImage} alt="upload-button" />
        </button>
      </AsideTopBtnBox>
    </AsideLayout>
  );
}

export default Aside;
