import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
} from './SingleFeedTopBarStyle';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';

function SingleFeedTopBar() {
  const navigate = useNavigate();
  const UserFeed = () => {
    navigate('/sns-user');
  };
  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser onClick={() => UserFeed()}>
        <SigleFeedUserProfile
          src="https://images.mypetlife.co.kr/content/uploads/2021/06/07161807/sq-lim-k4vhuUHv08o-unsplash-1024x683.jpg"
          alt="user profile image"
        />
        uerId
      </SingleFeedUser>
      <MobileButtonDetail />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
