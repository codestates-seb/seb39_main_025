import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  SingleFeedLayout,
  SingleFeedContainer,
  SingleFeedInfinite,
} from './SingleFeedStyle';
import SingleFeedTopBar from './SingleFeedTopBar';
import SingleFeedImage from './SingleFeedImage';
import SigleFeedContent from './SigleFeedContent';
import Loader from '../../Loader/Loader';
import EndMessage from '../../Loader/EndMessage';
import SuggestInfinite from '../Suggestion/SuggestInfinite';

function SingleFeed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // 무한 스크롤로 데이터 요청
  useEffect(() => {
    const getFeed = async () => {
      const res = await axios.get(
        `http://localhost:3004/sns?_page=${page}&_limit=3`,
      );
      const data = await res.data;
      setFeed(data);
    };
    getFeed();
  }, []);

  const axiosFeed = async () => {
    const res = await axios.get(
      `http://localhost:3004/sns?_page=${page}&_limit=3`,
    );
    const data = await res.data;
    return data;
  };

  const fetchData = async () => {
    const feedServer = await axiosFeed();
    setFeed([...feed, ...feedServer]);
    if (feedServer.length === 0 || feedServer.length < 3) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <SingleFeedContainer>
      <SingleFeedLayout>
        <SuggestInfinite />
        <InfiniteScroll
          dataLength={feed.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMessage />}
        >
          {feed.map((item) => {
            return (
              <SingleFeedInfinite key={item.id}>
                <SingleFeedTopBar item={item} />
                <SingleFeedImage />
                <SigleFeedContent item={item} />
              </SingleFeedInfinite>
            );
          })}
        </InfiniteScroll>
      </SingleFeedLayout>
    </SingleFeedContainer>
  );
}

export default SingleFeed;
