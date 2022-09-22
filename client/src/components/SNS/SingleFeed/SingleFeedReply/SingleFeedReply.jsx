import React, { useState } from 'react';
import axios from 'axios';
import {
  SingleFeedReqplyLayout,
  SingleFeedReplyInput,
  SingleFeedReplyTimeAndButton,
  SingleFeedReplyCreated,
} from './SingleReedReplyStyle';

function SingleFeedReply() {
  const [comment, setComment] = useState('');

  const repleUplodeHandler = (e) => {
    e.preventDefault();
    if (!comment) {
      return alert('댓글 내용을 채워 주세요');
    }
    const body = {
      comment,
    };
    axios.post('http://localhost:3004/comments', body).then(setComment(''));
    alert('댓글 작성이 성공 하였습니다');
  };

  return (
    <SingleFeedReqplyLayout>
      <SingleFeedReplyInput
        placeholder="Add Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SingleFeedReplyTimeAndButton>
        <SingleFeedReplyCreated>게시글 시간</SingleFeedReplyCreated>
        <button type="submit" onClick={(e) => repleUplodeHandler(e)}>
          댓글 등록
        </button>
      </SingleFeedReplyTimeAndButton>
    </SingleFeedReqplyLayout>
  );
}

export default SingleFeedReply;
