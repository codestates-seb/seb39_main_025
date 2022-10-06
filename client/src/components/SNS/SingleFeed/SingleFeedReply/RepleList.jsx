import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SingleFeedReplyLayout, ReplyBox } from './SingleReedReplyStyle';
import RepleContent from './RepleContent';

function RepleList({ index }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(
        `https://server.staybuddy.net/api/${index}/comments`,
      );
      const data = await res.data.data;
      setCommentList(data);
    };
    getComment();
  }, []);

  return (
    <SingleFeedReplyLayout>
      <ReplyBox>
        {commentList.map((el) => {
          // eslint-disable-next-line react/no-array-index-key
          return <RepleContent comment={el} />;
        })}
      </ReplyBox>
    </SingleFeedReplyLayout>
  );
}

export default RepleList;
