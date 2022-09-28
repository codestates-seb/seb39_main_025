import React from 'react';
import * as S from './DirectMessageStyle';

function FriendsList() {
  return (
    <S.FriendsListLayout>
      <S.userBox>
        <img src="" alt="" /> 아이디{' '}
      </S.userBox>
      <S.FriendsBox>
        <img src="" alt="" />
        <div>
          <h6> userId</h6> <p> message</p>
        </div>
      </S.FriendsBox>
    </S.FriendsListLayout>
  );
}

export default FriendsList;
