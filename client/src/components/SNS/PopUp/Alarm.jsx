import React, { useState } from 'react';
import NotificationIcon from '../../../assets/notifications.png';
import { AlarmLayOut, AlarmPopupLayout } from './PopUpStyle';
import LikesIcon from '../../../assets/paw-active.png';
import ChatIcon from '../../../assets/comment.png';

function Alarm() {
  const [popup, setPopup] = useState(false);
  const popupButton = () => {
    setPopup(!popup);
  };
  return (
    <AlarmLayOut onClick={popupButton}>
      <button type="button">
        <img src={NotificationIcon} alt="알림 버튼" />
      </button>
      {!popup ? (
        ''
      ) : (
        <AlarmPopupLayout className="ballon">
          <span>
            <img src={LikesIcon} alt={LikesIcon} /> 1
          </span>
          <span>
            <img src={ChatIcon} alt={ChatIcon} /> 2
          </span>
        </AlarmPopupLayout>
      )}
    </AlarmLayOut>
  );
}

export default Alarm;
