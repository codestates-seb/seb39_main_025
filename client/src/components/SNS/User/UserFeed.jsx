import React from 'react';
import MobileUserFeedTopBar from './MobileUserFeedTopBar';
import UserFeedProfile from './UserFeedProfile';
import { UserFeedLayout } from './UserFeedStyle';
import UserFeedGallery from './UserFeedGallery';
import { aboutdata } from '../../../data/data';

function UserFeed() {
  const items = aboutdata.data[0];

  return (
    <UserFeedLayout>
      <MobileUserFeedTopBar items={items} />
      <UserFeedProfile items={items} />
      <UserFeedGallery />
    </UserFeedLayout>
  );
}

export default UserFeed;
