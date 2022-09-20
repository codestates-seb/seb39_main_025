import React from 'react';
import {
  SingleFeedReqplyLayout,
  SingleFeedReplyInput,
  SingleFeedReplyTimeAndButton,
  SingleFeedReplyCreated,
} from './SingleReedReplyStyle';

function SingleFeedReply() {
  return (
    <SingleFeedReqplyLayout>
      <SingleFeedReplyInput placeholder="Add Comment..." />
      <SingleFeedReplyTimeAndButton>
        <SingleFeedReplyCreated>게시글 시간</SingleFeedReplyCreated>
        <button type="submit">댓글 등록 </button>
      </SingleFeedReplyTimeAndButton>
    </SingleFeedReqplyLayout>
  );
}

export default SingleFeedReply;
