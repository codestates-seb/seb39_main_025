import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import { MobileDetailLayOut } from './PopUpStyle';
import MoreIcon from '../../../assets/more.png';
import SnsUploadForm from '../../Form/sns/SnsUploadForm';

function MobileButtonDetail() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    return setIsOpen(!isOpen);
  };

  const menu = (
    <Menu
      items={[
        {
          label: (
            <button
              type="button"
              onClick={handleOpenModal}
              style={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              게시물 수정
            </button>
          ),
          key: '0',
        },
        {
          label: (
            <button
              type="button"
              onClick={() => navigate('/alert')}
              style={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              유기견 상담 신청 하기
            </button>
          ),
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: (
            <button
              type="button"
              style={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              디엠보내기
            </button>
          ),
          key: '3',
        },
      ]}
    />
  );

  return (
    <div>
      <MobileDetailLayOut overlay={menu} trigger={['click']}>
        <button type="button" onClick={(e) => e.preventDefault()}>
          <Space>
            <img src={MoreIcon} alt="더보기 버튼" />
            <DownOutlined />
          </Space>
        </button>
      </MobileDetailLayOut>
      <SnsUploadForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}

export default MobileButtonDetail;
