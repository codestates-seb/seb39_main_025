import React from 'react';
import { Link, useParams } from 'react-router-dom';

function MyPageTest() {
  const params = useParams();
  return (
    <div>
      {' '}
      <Link to={`/mypage/${params.userId}`}>
        <button type="button"> 회원 수정</button>
      </Link>
    </div>
  );
}

export default MyPageTest;
