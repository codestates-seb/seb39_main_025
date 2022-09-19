import React from 'react';
import {
  SingleFeedReqplyLayout,
  SingleFeedReplyInput,
  SingleFeedReplyCreated,
} from './SingleReedReplyStyle';

function SingleFeedReply() {
  return (
    <SingleFeedReqplyLayout>
      <SingleFeedReplyInput placeholder="Add Comment..." />
      <SingleFeedReplyCreated>게시글 시간</SingleFeedReplyCreated>
    </SingleFeedReqplyLayout>
  );
}

export default SingleFeedReply;
