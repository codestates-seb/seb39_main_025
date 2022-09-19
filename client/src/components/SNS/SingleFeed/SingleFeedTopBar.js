import React from 'react';
import {
  SingleFeedTopBarLayout,
  SigleFeedUserProfile,
  SingleFeedUser,
  More,
} from './SingleFeedTopBarStyle';
import MoreIcon from '../../../assets/more.png';

function SingleFeedTopBar() {
  return (
    <SingleFeedTopBarLayout>
      <SingleFeedUser>
        <SigleFeedUserProfile
          src="https://images.mypetlife.co.kr/content/uploads/2021/06/07161807/sq-lim-k4vhuUHv08o-unsplash-1024x683.jpg"
          alt="user profile image"
        />
        uerId
      </SingleFeedUser>
      <More src={MoreIcon} alt={MoreIcon} />
    </SingleFeedTopBarLayout>
  );
}

export default SingleFeedTopBar;
