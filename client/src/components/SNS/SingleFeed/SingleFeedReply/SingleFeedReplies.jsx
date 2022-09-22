import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import { useParams } from 'react-router-dom';
import {
  SingleFeedReplyLayout,
  ReplyBox,
  ReplyUserProfile,
  ReplyContent,
} from './SingleReedReplyStyle';

function SingleFeedReplies() {
  // const param = useParams();
  const [input, setInput] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [reple, setReple] = useState('');
  const showInput = () => {
    setInput(!input);
  };
  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(`http://localhost:3004/comments/${postId}`);
      const data = await res.data;
      setCommentList(data);
    };
    getComment();
  }, []);

  console.log(commentList);

  const repleSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      reply: reple,
    };
    axios.post(`http://localhost:3004/comments`, body);
  };

  return (
    <SingleFeedReplyLayout>
      <ReplyBox>
        {commentList.map(({ comment, id }) => {
          return (
            <ReplyContent>
              <ReplyUserProfile />
              <div>
                <img src=" " alt="" />
              </div>
              <div key={id}>
                <span>userId</span>
                {comment}
              </div>
              {!input ? (
                <button
                  type="button"
                  className="reply-button"
                  onClick={showInput}
                >
                  답글
                </button>
              ) : (
                <div style={{ display: 'flex' }}>
                  <button
                    type="submit"
                    className="reply-button"
                    onClick={(showInput, (e) => repleSubmitHandler(e))}
                  >
                    전송
                  </button>
                  <button
                    type="button"
                    className="reply-cancel"
                    onClick={showInput}
                  >
                    취소
                  </button>
                </div>
              )}

              {input ? (
                <input
                  type="text"
                  className="reply-input"
                  placeholder="add reply"
                  value={reple}
                  onChange={(e) => setReple(e.target.value)}
                />
              ) : (
                ''
              )}
            </ReplyContent>
          );
        })}
      </ReplyBox>
    </SingleFeedReplyLayout>
  );
}

export default SingleFeedReplies;
