import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout, Container } from '../GlobalStyle';
import UserInfoForm from '../components/Form/mypage/UserInfoForm';

function MyPage() {
  const params = useParams();
  return (
    <Layout>
      <Container>
        <Link to={`/mypage/${params.userId}`}>
          <button type="button"> 회원 수정</button>
        </Link>

        <UserInfoForm />
      </Container>
    </Layout>
  );
}

export default MyPage;
