import React from 'react';
import styled from 'styled-components';
import SingleFeed from '../components/SNS/SingleFeed/SingleFeed';
import Stories from '../components/SNS/Story/Stories';

function SingleFeedPage() {
  return (
    <SingleFeedPageLayout>
      <Stories />
      <div>
        <SingleFeed />
      </div>
    </SingleFeedPageLayout>
  );
}

export default SingleFeedPage;

const SingleFeedPageLayout = styled.div`
  justify-content: center;
  margin-bottom: 15rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    width: 100%;
  }
`;
