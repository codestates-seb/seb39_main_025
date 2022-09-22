import React from 'react';
import { Layout, Container } from '../GlobalStyle';
import UserInfoForm from '../components/Form/mypage/UserInfoForm';

function MyPage() {
  return (
    <Layout>
      <Container>
        <UserInfoForm />
      </Container>
    </Layout>
  );
}

export default MyPage;
