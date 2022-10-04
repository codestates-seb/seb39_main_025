import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import { MobileDetailLayOut } from './PopUpStyle';
import MoreIcon from '../../../assets/more.png';
import SnsEditForm from '../../Form/sns/SnsEditForm';

function MobileButtonDetail({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const editPost = async () => {
      const getPost = await axios.get(
        `https://server.staybuddy.net/api/posts2/${index}`,
      );
      const res = getPost.data.image;
      setData(res);
    };
    editPost();
  }, []);

  const handleOpenModal = () => {
    return setIsOpen(!isOpen);
  };

  const DeleteHandler = () => {
    axios
      .delete(`https://server.staybuddy.net/api/posts/${index}`)
      .then(alert('진짜로 게시물을 삭제 하실 건가요?'))
      .then((res) => console.log(res.data));
    // .then(window.location.reload());
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
              onClick={() => DeleteHandler()}
              style={{
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              게시물 삭제
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
      <SnsEditForm
        data={data}
        index={index}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
      />
    </div>
  );
}

export default MobileButtonDetail;
