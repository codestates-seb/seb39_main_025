import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
} from './SingleFeedTopBarStyle';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';

function SingleFeedTopBar({ item, index }) {
  const navigate = useNavigate();
  const UserFeed = () => {
    navigate(`/sns-user/${item.snsId}`);
  };

  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser onClick={() => UserFeed()}>
        <SigleFeedUserProfile
          src={item.postImageUrl}
          alt="user profile image"
        />
        {item.username}
      </SingleFeedUser>
      <MobileButtonDetail item={item} index={index} />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
