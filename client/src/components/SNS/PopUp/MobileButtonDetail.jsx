import React, { useState, useRef } from 'react';
import axios from 'axios';
import { DownOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { MobileDetailLayOut } from './PopUpStyle';
import MoreIcon from '../../../assets/more.png';
// import SnsEditForm from '../../Form/sns/SnsEditForm';

function MobileButtonDetail({ index }) {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState('');
  const ref = useRef();
  const token = localStorage.getItem('accessToken');

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };

  const onClick = (e) => {
    e.preventDefault();
    const editPost = async () => {
      const getPost = await axios.get(
        `https://server.staybuddy.net/api/posts2/${index}`,
        myConfig,
      );
      const res = getPost.data.image;
      setData(res);
    };
    editPost();
  };

  // const handleOpenModal = () => {
  //   return setIsOpen(!isOpen);
  // };

  function DeleteHandler(e) {
    e.preventDefault();
    if (!token) {
      alert('로그인 후 이용해주세요');
      return navigate('/login');
    }
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      axios
        .delete(`https://server.staybuddy.net/api/posts/${index}`)
        .then((res) => console.log(res.data))
        .then(window.location.reload());
    }
  }

  const menu = (
    <Menu
      items={[
        // {
        //   label: (
        //     <button
        //       type="button"
        //       onClick={handleOpenModal}
        //       style={{
        //         border: 'none',
        //         width: '100%',
        //         backgroundColor: 'transparent',
        //         textAlign: 'left',
        //         cursor: 'pointer',
        //       }}
        //     >
        //       게시물 수정
        //     </button>
        //   ),
        //   key: '0',
        // },
        {
          label: (
            <button
              type="button"
              onClick={(e) => DeleteHandler(e)}
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
              신고하기
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
        <button
          type="button"
          ref={ref}
          onClick={((e) => e.preventDefault(), (e) => onClick(e))}
        >
          <Space>
            <img src={MoreIcon} alt="더보기 버튼" />
            <DownOutlined />
          </Space>
        </button>
      </MobileDetailLayOut>
      {/* <SnsEditForm
        data={data}
        index={index}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
      /> */}
    </div>
  );
}

export default MobileButtonDetail;
