import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useParams } from 'react-router-dom';
import { SingleFeedReplyLayout, ReplyBox } from './SingleReedReplyStyle';
import RepleContent from './RepleContent';

function RepleList() {
  // const param = useParams();

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(`http://localhost:3004/comments`);
      const data = await res.data;
      setCommentList(data);
    };
    getComment();
  }, []);

  return (
    <SingleFeedReplyLayout>
      <ReplyBox>
        {commentList.map((el, idx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <RepleContent key={idx} comment={el} />;
        })}
      </ReplyBox>
    </SingleFeedReplyLayout>
  );
}

export default RepleList;
