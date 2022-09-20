import React from 'react';
import { SingleFeedLayout, SingleFeedContainer } from './SingleFeedStyle';
import SingleFeedTopBar from './SingleFeedTopBar';
import SingleFeedImage from './SingleFeedImage';
import SigleFeedContent from './SigleFeedContent';
import AButtons from '../../Aside/AButtons';
import { aboutdata } from '../../../data/data';

function SingleFeed() {
  const items = aboutdata.data;
  return (
    <SingleFeedContainer>
      <AButtons />
      {items.map((item) => {
        return (
          <SingleFeedLayout key={item.id}>
            <SingleFeedTopBar item={item} />
            <SingleFeedImage />
            <SigleFeedContent item={item} />
          </SingleFeedLayout>
        );
      })}
    </SingleFeedContainer>
  );
}

export default SingleFeed;
