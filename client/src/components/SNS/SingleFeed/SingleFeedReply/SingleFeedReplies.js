import React, { useState } from 'react';
import {
  SingleFeedReplyLayout,
  ReplyBox,
  ReplyUserProfile,
  ReplyContent,
} from './SingleReedReplyStyle';

function SingleFeedReplies() {
  const [input, setInput] = useState(false);

  const showInput = () => {
    setInput(!input);
  };
  return (
    <SingleFeedReplyLayout>
      <ReplyBox>
        <ReplyUserProfile
          src="https://media.bunjang.co.kr/product/166788639_1_1634025108_w360.jpg"
          alt="user profile"
        />
        <ReplyContent>
          <p>
            <span>userId</span>
            Authorization헤더는 일반적으로 사용자 에이전트가 자격 증명 없이
            보호된 리소스를 처음 요청한 후에 전송되지만 항상 그런 것은 아닙니다
            . 서버 는 적어도 하나의 헤더를 포함하는 메시지로 응답합니다.{' '}
          </p>

          {!input ? (
            <button type="button" className="reply-button" onClick={showInput}>
              답글
            </button>
          ) : (
            <div style={{ display: 'flex' }}>
              <button
                type="button"
                className="reply-button"
                onClick={showInput}
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
            />
          ) : (
            ''
          )}
        </ReplyContent>
      </ReplyBox>
    </SingleFeedReplyLayout>
  );
}

export default SingleFeedReplies;
