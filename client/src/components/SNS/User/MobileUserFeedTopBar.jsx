import React from 'react';
import { UserFeedTopBarLayout } from './UserFeedStyle';
import LeftArrowIcon from '../../../assets/left-arrow.png';
import Alarm from '../PopUp/Alarm';
import MobileButtonDetail from '../PopUp/MobileButtonDetail';

function UserFeedTopBar({ items }) {
  return (
    <UserFeedTopBarLayout>
      <button type="button">
        <img src={LeftArrowIcon} alt="개별계정 뒤로가기 버튼" />
      </button>
      <span>{items.username}</span>
      <div className="right-button">
        <Alarm />
        <MobileButtonDetail />
      </div>
    </UserFeedTopBarLayout>
  );
}

export default UserFeedTopBar;
