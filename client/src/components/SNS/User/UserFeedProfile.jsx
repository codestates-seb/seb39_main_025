import React from 'react';
import {
  ProfileBox,
  UserContent,
  UserFeedPorofileLayout,
  ProfileCircle,
  UserFeedBedge,
  UserFeedInfoTable,
} from './UserFeedStyle';
import TempProfilePic from '../../../assets/paw-active.png';

function UserFeedProfile({ items }) {
  return (
    <UserFeedPorofileLayout>
      <ProfileBox>
        <ProfileCircle>
          <img src={TempProfilePic} alt="프로필 이미지" />
        </ProfileCircle>
        <UserFeedInfoTable>
          <table>
            <thead>
              <tr>
                <th colSpan="1"> likes</th>
                <th colSpan="1"> Post</th>
              </tr>
              <tr>
                <td>{items.memberId}</td>
                <td>{items.memberId}</td>
              </tr>
            </thead>
          </table>
        </UserFeedInfoTable>
        <UserFeedBedge>
          {/* <img src={} alt="유기견 뱃지" />
          <img src={} alt="유기견 봉자사 뱃지" /> */}
        </UserFeedBedge>
      </ProfileBox>

      <UserContent>
        <span>{items.username}</span>
        <p>{}</p>
      </UserContent>
    </UserFeedPorofileLayout>
  );
}

export default UserFeedProfile;
