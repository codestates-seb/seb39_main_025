import React from 'react';
import { SingleFeedLayout, SingleFeedContainer } from './SingleFeedStyle';
import SingleFeedTopBar from './SingleFeedTopBar';
import SingleFeedImage from './SingleFeedImage';
import SigleFeedContent from './SigleFeedContent';

function SingleFeed() {
  return (
    <SingleFeedContainer>
      <SingleFeedLayout>
        <SingleFeedTopBar />
        <SingleFeedImage />
        <SigleFeedContent />
      </SingleFeedLayout>
    </SingleFeedContainer>
  );
}

export default SingleFeed;
