import React from 'react';
import { aboutdata } from '../../../data/data';
import { UserFeedGalleryLayout, GalleryCard } from './UserFeedStyle';

function UserFeedGallery() {
  const items = aboutdata.data;

  return (
    <UserFeedGalleryLayout>
      <GalleryCard title="POST">
        {items.map((item) => {
          return (
            <GalleryCard.Grid className="card-grid" key={item.id}>
              <img alt="post" src={item.src} />
            </GalleryCard.Grid>
          );
        })}
      </GalleryCard>
    </UserFeedGalleryLayout>
  );
}

export default UserFeedGallery;
