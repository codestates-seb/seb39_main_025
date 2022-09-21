import React from 'react';
import SingleFeed from '../components/SNS/SingleFeed/SingleFeed';
import Stories from '../components/SNS/Story/Stories';

function HomePage() {
  return (
    <div>
      <Stories />
      <SingleFeed />
    </div>
  );
}

export default HomePage;
