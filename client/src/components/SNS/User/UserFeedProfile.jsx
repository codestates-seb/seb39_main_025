import React from 'react';

import {
  ProfileBox,
  UserContent,
  UserFeedPorofileLayout,
  ProfileCircle,
  UserFeedBedge,
  UserFeedInfoTable,
  FollowingButton,
} from './UserFeedStyle';

function UserFeedProfile({ items }) {
  return (
    <UserFeedPorofileLayout>
      <ProfileBox>
        <ProfileCircle>
          <img src={items.src} alt="프로필 이미지" />
        </ProfileCircle>
        <UserFeedInfoTable>
          <table>
            <thead>
              <tr>
                <th colSpan="1"> Followers</th>
                <th colSpan="1"> Post</th>
              </tr>
              <tr>
                <td>{items.followers}</td>
                <td>{items.post}</td>
              </tr>
            </thead>
          </table>
        </UserFeedInfoTable>
        <UserFeedBedge>
          <img src={items.dogbedge} alt="유기견 뱃지" />
          <img src={items.shelterbedge} alt="유기견 봉자사 뱃지" />
        </UserFeedBedge>
      </ProfileBox>

      <UserContent>
        <span>{items.username}</span>
        <p>{items.memo}</p>
        <FollowingButton yellow type="button">
          Following
        </FollowingButton>
      </UserContent>
    </UserFeedPorofileLayout>
  );
}

export default UserFeedProfile;
