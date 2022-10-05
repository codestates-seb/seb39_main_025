import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserFeedGalleryLayout, GalleryCard } from './UserFeedStyle';

function UserFeedGallery({ items }) {
  return (
    <UserFeedGalleryLayout>
      <GalleryCard title="POST">
        {items.images?.map((item) => {
          return (
            <GalleryCard.Grid className="card-grid" key={item.id}>
              <NavLink to="/sns">
                <img
                  alt="post"
                  src={`https://server.staybuddy.net/upload/${item.postImageUrl}`}
                />
              </NavLink>
              <p>{item.caption}</p>
            </GalleryCard.Grid>
          );
        })}
      </GalleryCard>
    </UserFeedGalleryLayout>
  );
}

export default UserFeedGallery;
