import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  SingleFeedLayout,
  SingleFeedContainer,
  SingleFeedInfinite,
} from './SingleFeedStyle';
import SingleFeedTopBar from './SingleFeedTopBar';
import SingleFeedImage from './SingleFeedImage';
import SigleFeedContent from './SigleFeedContent';
import Loading from '../../Loading/Loading';

function SingleFeed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    const getFeed = async () => {
      const res = await axios.get(
        `https://server.staybuddy.net/api/posts`,
        myConfig,
      );
      const data = await res.data.data;
      setFeed(data);
      setLoading(false);
    };
    getFeed();
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      <SingleFeedContainer>
        <SingleFeedLayout>
          {feed?.map((item) => {
            return (
              <SingleFeedInfinite key={item.id}>
                <SingleFeedTopBar index={item.id} item={item} />
                <SingleFeedImage item={item} />
                <SigleFeedContent item={item} index={item.id} />
              </SingleFeedInfinite>
            );
          })}
        </SingleFeedLayout>
      </SingleFeedContainer>
    </>
  );
}

export default SingleFeed;
