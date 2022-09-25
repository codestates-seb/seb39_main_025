import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout, Container } from '../GlobalStyle';
import UserInfoForm from '../components/Form/mypage/UserInfoForm';

function MyPage() {
  let { userId } = useParams();
  userId = window.localStorage.getItem('userId');
  return (
    <Layout>
      <Container>
        <Link to={`/mypage/${userId}`}>
          <button type="button" style={{ marginBottom: '100px' }}>
            회원 정보 수정
          </button>
        </Link>
      </Container>
    </Layout>
  );
}

export default MyPage;
