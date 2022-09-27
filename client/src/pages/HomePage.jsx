import React from 'react';
import SingleFeed from '../components/SNS/SingleFeed/SingleFeed';
import Stories from '../components/SNS/Story/Stories';

function HomePage() {
  return (
    <>
      <Stories />
      <SingleFeed />
    </>
  );
}

export default HomePage;
