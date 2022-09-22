import React from 'react';
import SingleFeed from '../components/SNS/SingleFeed/SingleFeed';
import Stories from '../components/SNS/Story/Stories';
import { Layout } from '../GlobalStyle';

function HomePage() {
  return (
    <Layout>
      <Stories />
      <SingleFeed />
    </Layout>
  );
}

export default HomePage;
