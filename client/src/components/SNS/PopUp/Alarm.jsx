import React, { useState, useEffect, useRef } from 'react';
import NotificationIcon from '../../../assets/notifications.png';
import { AlarmLayOut, AlarmPopupLayout } from './PopUpStyle';
import LikesIcon from '../../../assets/paw-active.png';
import ChatIcon from '../../../assets/comment.png';

function Alarm() {
  const [popup, setPopup] = useState(false);

  const popupButton = () => {
    setPopup(!popup);
  };
  const modalEl = useRef();

  const handleClickOutside = ({ target }) => {
    if (popup && !modalEl.current.contains(target)) setPopup(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <AlarmLayOut onClick={popupButton} ref={modalEl}>
      <button type="button">
        <img src={NotificationIcon} alt="알림 버튼" />
      </button>
      {popup && (
        <AlarmPopupLayout className="ballon">
          <span>
            <img src={LikesIcon} alt={LikesIcon} style={{ height: '10%' }} /> 1
          </span>
          <span>
            <img src={ChatIcon} alt={ChatIcon} style={{ height: '10%' }} /> 2
          </span>
        </AlarmPopupLayout>
      )}
    </AlarmLayOut>
  );
}

export default Alarm;
