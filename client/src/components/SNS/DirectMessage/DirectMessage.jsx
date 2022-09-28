import React from 'react';
import Chatbox from './Chatbox';
import FriendsList from './FriendsList';

function DirectMessage() {
  return (
    <div style={{ display: 'flex', height: '100%', marginTop: '50px' }}>
      <FriendsList />
      <Chatbox />
    </div>
  );
}

export default DirectMessage;
