import React from 'react';
import MobileUserFeedTopBar from './MobileUserFeedTopBar';
import UserFeedProfile from './UserFeedProfile';
import { UserFeedLayout } from './UserFeedStyle';
import UserFeedGallery from './UserFeedGallery';
import { aboutdata } from '../../../data/data';

function UserFeed() {
  const items = aboutdata.data[0];

  return (
    <>
      <MobileUserFeedTopBar items={items} />
      <UserFeedLayout>
        <UserFeedProfile items={items} />
        <UserFeedGallery />
      </UserFeedLayout>
    </>
  );
}

export default UserFeed;
