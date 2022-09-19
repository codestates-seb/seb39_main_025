import React from 'react';
import {
  SigleFeedContentLayout,
  ContentIcons,
  IconButton,
  CaraouselIcon,
  Likes,
  UserContent,
} from './SingleFeedContentStyle';
import LikesIcon from '../../../assets/paw-active.png';
import ChatIcon from '../../../assets/comment.png';

function SigleFeedContent() {
  return (
    <SigleFeedContentLayout>
      <ContentIcons>
        <IconButton>
          <img src={LikesIcon} alt={LikesIcon} />
          <img src={ChatIcon} alt={ChatIcon} />
          <CaraouselIcon> .... </CaraouselIcon>
        </IconButton>
        <Likes> 100 likes</Likes>
      </ContentIcons>
      <UserContent>
        {' '}
        userName{' '}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt... more
        </p>
      </UserContent>
    </SigleFeedContentLayout>
  );
}

export default SigleFeedContent;
