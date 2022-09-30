import React from 'react';
import { UserFeedGalleryLayout, GalleryCard } from './UserFeedStyle';

function UserFeedGallery({ items }) {
  return (
    <UserFeedGalleryLayout>
      <GalleryCard title="POST">
        {items.images?.map((item) => {
          return (
            <GalleryCard.Grid className="card-grid" key={item.id}>
              <img
                alt="post"
                src={`http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/upload/${item.postImageUrl}`}
              />
              <p>{item.caption}</p>
            </GalleryCard.Grid>
          );
        })}
      </GalleryCard>
    </UserFeedGalleryLayout>
  );
}

export default UserFeedGallery;
