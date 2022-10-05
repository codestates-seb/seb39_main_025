import React from 'react';
import styled from 'styled-components';
import SingleFeed from '../components/SNS/SingleFeed/SingleFeed';
import Stories from '../components/SNS/Story/Stories';
import SuggestInfinite from '../components/SNS/Suggestion/SuggestInfinite';

function HomePage() {
  return (
    <>
      <Stories />
      <FeedBox>
        <SingleFeed />
        {/* <SuggestInfinite /> */}
      </FeedBox>
    </>
  );
}

export default HomePage;

const FeedBox = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
