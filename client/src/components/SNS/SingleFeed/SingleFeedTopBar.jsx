import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
} from './SingleFeedTopBarStyle';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';

function SingleFeedTopBar({ item }) {
  const userPage = localStorage.getItem('userId');

  const navigate = useNavigate();
  const UserFeed = () => {
    navigate(`/sns-user/${userPage}`);
  };
  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser onClick={() => UserFeed()}>
        <SigleFeedUserProfile
          src={item.profileImageUrl}
          alt="user profile image"
        />
        {item.username}
      </SingleFeedUser>
      <MobileButtonDetail item={item} />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
