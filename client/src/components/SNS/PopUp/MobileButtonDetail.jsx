import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import { MobileDetailLayOut } from './PopUpStyle';
import MoreIcon from '../../../assets/more.png';

function MobileButtonDetail() {
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: <Link to={() => navigate('/sns-upload')}> 업로드 </Link>,
          key: '0',
        },
        {
          label: <Link to={() => navigate('/mypage')}>마이페이지</Link>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '설정',
          key: '3',
        },
      ]}
    />
  );

  return (
    <MobileDetailLayOut overlay={menu} trigger={['click']}>
      <button type="button" onClick={(e) => e.preventDefault()}>
        <Space>
          <img src={MoreIcon} alt="더보기 버튼" />
          <DownOutlined />
        </Space>
      </button>
    </MobileDetailLayOut>
  );
}

export default MobileButtonDetail;
