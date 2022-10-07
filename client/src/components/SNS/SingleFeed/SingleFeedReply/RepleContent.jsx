import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import moment from 'moment';
import 'moment/locale/ko';
import { RepleContentDiv } from './SingleReedReplyStyle';

function RepleContent({ comment }) {
  const [modalFlag, setModalFlag] = useState(false);

  // const user = useSelector((state) => state.token);
  const ref = useRef();

  function useOnClickOutside(refer, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!refer.current || refer.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [refer, handler]);
  }

  useOnClickOutside(ref, () => setModalFlag(false));

  const SetTime = (a, b) => {
    if (a !== b) {
      moment(b).format(`YYYY년 MMMM Do, hh:mm'(수정됨)`);
    } else {
      moment(a).format('YYYY년 MMMM Do, hh:mm');
    }
  };

  const token = localStorage.getItem('accessToken');
  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };
  const DeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm('정말로 삭제 하시겠습니까?')) {
      axios
        .delete(
          `https://server.staybuddy.net/api/comments/${comment.id}`,
          myConfig,
        )
        .then(window.location.reload());
    }
  };

  return (
    <RepleContentDiv>
      <div className="author">
        <div className="userInfo">
          <Avatar size="30" round style={{ border: '1px solid #c6c6c6' }} />
          <p> {comment.member.username}</p>
        </div>
        {/* {props.reple.uid === user.token && (유저 확인하고 조건부 팝업 버튼) } */}
        <div className="modal-Control">
          <button
            type="button"
            onClick={() => setModalFlag(true)}
            className="more"
          >
            <span> ...</span>
          </button>
          {modalFlag && (
            <div className="modal" ref={ref}>
              <button
                type="button"
                className="delete"
                onClick={(e) => DeleteHandler(e)}
              >
                삭제
              </button>
            </div>
          )}
        </div>
        <p className="time">{SetTime(comment.id, comment.id)}</p>

        <p className="comment">{comment.content}</p>
      </div>
    </RepleContentDiv>
  );
}

export default RepleContent;
