import React from 'react';
import {
  ProfileCircle,
  SuggestionLayout,
  SuggestUserBox,
  UserName,
  FollowButton,
} from './SuggestionStyle';

function Suggestion({ items }) {
  return (
    <SuggestionLayout>
      <h2>추천 버디</h2>
      {items.map((item) => {
        return (
          <SuggestUserBox key={item.id}>
            <ProfileCircle>
              <img src={item.src} alt="프로필 이미지" />
            </ProfileCircle>
            <UserName>
              <p>{item.username} </p> <span> {item.memo}</span>
            </UserName>
            <FollowButton type="button" yellow>
              {' '}
              Follow
            </FollowButton>
          </SuggestUserBox>
        );
      })}
    </SuggestionLayout>
  );
}

export default Suggestion;
