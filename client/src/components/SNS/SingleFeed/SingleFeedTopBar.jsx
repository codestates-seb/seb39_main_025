import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
} from './SingleFeedTopBarStyle';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';

function SingleFeedTopBar({ item }) {
  const navigate = useNavigate();
  const UserFeed = () => {
    navigate('/sns-user');
  };
  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser onClick={() => UserFeed()}>
        <SigleFeedUserProfile src={item.src} alt="user profile image" />
        {item.username}
      </SingleFeedUser>
      <MobileButtonDetail />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
