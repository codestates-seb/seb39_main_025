import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  SingleFeedReqplyLayout,
  SingleFeedReplyInput,
  SingleFeedReplyTimeAndButton,
} from './SingleReedReplyStyle';

function SingleFeedReply({ index }) {
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const token = localStorage.getItem('accessToken');

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };
  // eslint-disable-next-line consistent-return
  const repleUplodeHandler = (e) => {
    e.preventDefault();
    if (!token) {
      alert('로그인 후 이용해주세요');
      return navigate('/login');
    }
    if (!comment) {
      return alert('댓글 내용을 채워 주세요');
    }
    const body = {
      content: comment,
      imageId: index,
    };
    axios
      .post('https://server.staybuddy.net/api/comments', body, myConfig)
      .then(alert('댓글 작성이 성공 하였습니다'))
      .then(setComment(''))
      .then(window.location.reload());
  };

  return (
    <SingleFeedReqplyLayout>
      <SingleFeedReplyInput
        placeholder="Add Comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <SingleFeedReplyTimeAndButton>
        <button type="submit" onClick={(e) => repleUplodeHandler(e)}>
          댓글 등록
        </button>
      </SingleFeedReplyTimeAndButton>
    </SingleFeedReqplyLayout>
  );
}

export default SingleFeedReply;
