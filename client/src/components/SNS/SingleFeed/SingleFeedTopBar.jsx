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

  const UserFeed = () => {
    navigate(`/sns-user/${item.snsId}`);
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
