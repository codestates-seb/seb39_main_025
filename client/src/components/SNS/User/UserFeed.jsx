import React from 'react';
import MobileUserFeedTopBar from './MobileUserFeedTopBar';
import UserFeedProfile from './UserFeedProfile';
import { UserFeedLayout, SnsButton } from './UserFeedStyle';
import UserFeedGallery from './UserFeedGallery';
import { aboutdata } from '../../../data/data';
import AButtons from '../../Aside/AButtons';

function UserFeed() {
  const items = aboutdata.data[0];

  return (
    <>
      <SnsButton>
        <AButtons />
      </SnsButton>
      <MobileUserFeedTopBar items={items} />
      <UserFeedLayout>
        <UserFeedProfile items={items} />
        <UserFeedGallery />
      </UserFeedLayout>
    </>
  );
}

export default UserFeed;
