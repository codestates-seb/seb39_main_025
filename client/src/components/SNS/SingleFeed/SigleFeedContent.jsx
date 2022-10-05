import React, { useState } from 'react';
import axios from 'axios';
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
import RepleList from './SingleFeedReply/RepleList';
import SingleFeedReply from './SingleFeedReply/SingleFeedReply';

function SigleFeedContent({ item, index }) {
  const [more, setMore] = useState(false);
  const [rpShow, setrpShow] = useState(false);
  const [like, setLike] = useState(true);

  const moreButton = () => {
    setMore(!more);
  };
  const token = localStorage.getItem('accessToken');
  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };

  const handleLikeClick = () => {
    // setLike(!like);
    // console.log(item);
    // let result = item.likes;
    // if (like === false) {
    //   if (item.likes > 0) {
    //     result = item.likes - 1;
    //   }
    //   result = item.likes;
    // } else {
    //   result = item.likes + 1;
    // }
    // const body = {
    //   likes: result,
    // };
    axios
      .post(`https://server.staybuddy.net/${item.id}/likes`, myConfig)
      .then((res) => {
        console.log(res.data);
      });
  };

  const ShowReplyHandler = () => {
    setrpShow(!rpShow);
  };

  return (
    <SigleFeedContentLayout>
      <ContentIcons>
        <IconButton>
          <button type="button" onClick={() => handleLikeClick()}>
            {!like ? (
              <img src={LikesIcon} alt={LikesIcon} />
            ) : (
              <img src={DisLikeIcon} alt={DisLikeIcon} />
            )}
          </button>
          <button type="button" onClick={() => ShowReplyHandler()}>
            <img src={ChatIcon} alt={ChatIcon} />
          </button>
        </IconButton>
        <Likes> Likes</Likes>
      </ContentIcons>
      <UserContent>
        <UserId>{item.username}</UserId>
        <UserComment className={more ? 'more' : ''}>{item.caption}</UserComment>
        <button type="button" onClick={moreButton}>
          more
        </button>
      </UserContent>
      <SingleFeedReply index={index} />
      {rpShow ? <RepleList index={index} /> : ''}
    </SigleFeedContentLayout>
  );
}

export default SigleFeedContent;
