import React from 'react';
import MobileUserFeedTopBar from './MobileUserFeedTopBar';
import UserFeedProfile from './UserFeedProfile';
import { UserFeedLayout, SnsButton } from './UserFeedStyle';
import UserFeedGallery from './UserFeedGallery';
import AButtons from '../../Aside/AButtons';

function UserFeed({ userInfo }) {
  return (
    <>
      <SnsButton>
        <AButtons />
      </SnsButton>
      <MobileUserFeedTopBar items={userInfo} />
      <UserFeedLayout>
        <UserFeedProfile items={userInfo} />
        <UserFeedGallery items={userInfo} />
      </UserFeedLayout>
    </>
  );
}

export default UserFeed;
