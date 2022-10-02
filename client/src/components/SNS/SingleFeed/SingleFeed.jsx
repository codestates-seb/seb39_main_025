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

function SingleFeed() {
  const [feed, setFeed] = useState([]);

  const [hasMore, setHasMore] = useState(true);

  // const pageUserId = localStorage.getItem('userId');
  // console.log(pageUserId);
  const token = localStorage.getItem('accessToken');

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: token,
    },
  };

  // 무한 스크롤로 데이터 요청
  useEffect(() => {
    const getFeed = async () => {
      const res = await axios.get(
        `http://www.server.staybuddy.net/api/posts`,
        myConfig,
      );
      const data = await res.data.data;
      console.log(data);
      setFeed(data);
    };
    getFeed();
  }, []);

  // const axiosFeed = async () => {
  //   const res = await axios.get(
  //     `http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/api/users/${pageUserId}?_page=${page}&_limit=3`,
  //   );
  //   const data = await res.data.member;
  //   console.log(data);
  //   return data;
  // };

  // const fetchData = async () => {
  //   const feedServer = await axiosFeed();
  //   setFeed([...feed, ...feedServer]);
  //   if (feedServer.length === 0 || feedServer.length < 3) {
  //     setHasMore(false);
  //   }
  //   setPage(page + 1);
  // };

  return (
    <SingleFeedContainer>
      <SingleFeedLayout>
        <InfiniteScroll
          dataLength={feed.length}
          // next={fetchData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMessage />}
        >
          {feed?.map((item) => {
            return (
              <SingleFeedInfinite key={item.id}>
                <SingleFeedTopBar item={item} />
                <SingleFeedImage item={item} />
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
