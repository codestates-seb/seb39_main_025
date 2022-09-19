import React, { useState } from 'react';
import {
  SigleFeedContentLayout,
  ContentIcons,
  IconButton,
  UserId,
  Likes,
  UserContent,
  UserComment,
} from './SingleFeedContentStyle';
import LikesIcon from '../../../assets/paw-active.png';
import DisLikeIcon from '../../../assets/paw.png';
import ChatIcon from '../../../assets/comment.png';
import SingleFeedReplies from './SingleFeedReply/SingleFeedReplies';
import SingleFeedReply from './SingleFeedReply/SingleFeedReply';

function SigleFeedContent() {
  const [more, setMore] = useState(false);
  const [rpShow, setrpShow] = useState(false);
  const [like, setLike] = useState(false);
  const moreButton = () => {
    setMore(!more);
  };

  const ShowReplyHandler = () => {
    setrpShow(!rpShow);
  };
  const likeHandler = () => {
    setLike(!like);
  };
  return (
    <SigleFeedContentLayout>
      <ContentIcons>
        <IconButton>
          <button type="button" onClick={() => likeHandler()}>
            {like ? (
              <img src={LikesIcon} alt={LikesIcon} />
            ) : (
              <img src={DisLikeIcon} alt={DisLikeIcon} />
            )}
          </button>
          <button type="button" onClick={() => ShowReplyHandler()}>
            <img src={ChatIcon} alt={ChatIcon} />
          </button>
        </IconButton>
        <Likes> 100 likes</Likes>
      </ContentIcons>
      <UserContent>
        <UserId>userName</UserId>
        <UserComment className={more ? 'more' : ''}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </UserComment>
        <button type="button" onClick={moreButton}>
          more
        </button>
      </UserContent>
      <SingleFeedReply />
      {rpShow ? <SingleFeedReplies /> : ''}
    </SigleFeedContentLayout>
  );
}

export default SigleFeedContent;
