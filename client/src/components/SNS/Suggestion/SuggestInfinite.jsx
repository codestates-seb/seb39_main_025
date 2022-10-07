import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Suggestion from './Suggestion';
import Loader from '../../Loader/Loader';
import { InfiniteScrollLayout } from './SuggestionStyle';
import EndMessage from '../../Loader/EndMessage';

function SuggestInfinite() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const listInitailize = async () => {
      const res = await axios.get(`http://localhost:3004/sns?_page=1&_limit=3`);
      const data = await res.data;
      setList(data);
    };
    listInitailize();
  }, []);

  const moreList = async () => {
    const res = await axios.get(
      `http://localhost:3004/sns?_page=${page}&_limit=3`,
    );
    const data = await res.data;
    return data;
  };

  const fetchData = async () => {
    const serverList = await moreList();
    setList([...list, ...serverList]);
    if (serverList.length === 0 || serverList.length < 3) {
      setHasMore(false);
    }
    setPage(page + 1);
  };

  return (
    <InfiniteScrollLayout>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMessage />}
      >
        <Suggestion items={list} />
      </InfiniteScroll>
    </InfiniteScrollLayout>
  );
}

export default SuggestInfinite;
