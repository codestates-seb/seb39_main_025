import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
} from './SingleFeedTopBarStyle';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';
import TempProfilePic from '../../../assets/paw-active.png';

function SingleFeedTopBar({ item, index }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const UserFeed = () => {
    if (token) {
      navigate(`/sns-user/${item.snsId}`);
    } else {
      alert('로그인이 필요합니다');
    }
  };

  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser onClick={() => UserFeed()}>
        <SigleFeedUserProfile src={TempProfilePic} alt="user profile image" />
        {item.username}
      </SingleFeedUser>
      <MobileButtonDetail index={index} item={item} />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
