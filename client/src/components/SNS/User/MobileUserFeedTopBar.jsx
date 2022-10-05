import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserFeedTopBarLayout } from './UserFeedStyle';
import LeftArrowIcon from '../../../assets/left-arrow.png';
import Alarm from '../PopUp/Alarm';

function UserFeedTopBar({ items }) {
  const navigate = useNavigate();

  return (
    <UserFeedTopBarLayout>
      <button type="button" onClick={() => navigate('/sns')}>
        <img src={LeftArrowIcon} alt="개별계정 뒤로가기 버튼" />
      </button>
      <span>{items.username}</span>
      <div className="right-button">
        <Alarm />
      </div>
    </UserFeedTopBarLayout>
  );
}

export default UserFeedTopBar;
