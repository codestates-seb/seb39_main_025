import React, { useState } from 'react';
import * as S from './DirectMessageStyle';
import DMIcon from '../../../assets/direct-message.png';

function Chatbox() {
  const [userData, setUserData] = useState({
    username: '',
    recievername: '',
    connected: false,
    message: '',
  });

  return (
    <S.ChatBoxLayout>
      <S.userBox>
        <img src="" alt="" /> 아이디{' '}
      </S.userBox>
      <S.ChatBox> Chatbox</S.ChatBox>
      <S.ChatInputBox>
        <input type="text" placeholder="Message..." />
        <img src={DMIcon} alt="" />
      </S.ChatInputBox>
    </S.ChatBoxLayout>
  );
}

export default Chatbox;
