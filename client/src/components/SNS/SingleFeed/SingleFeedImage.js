import React from 'react';
import {
  SingleFeedImageLayout,
  SingleFeedImageCounter,
} from './SingleFeedImageStyle';

function SingleFeedImage() {
  return (
    <SingleFeedImageLayout>
      <SingleFeedImageCounter>1/4</SingleFeedImageCounter>
      <img
        src="https://crowdfunding.or.kr/uploads/blog/img_627706222db64.jpg"
        alt="feed"
      />
    </SingleFeedImageLayout>
  );
}
export default SingleFeedImage;
