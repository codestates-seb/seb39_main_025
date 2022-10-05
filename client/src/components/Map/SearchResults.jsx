import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaDog } from 'react-icons/fa';
import { CgPill } from 'react-icons/cg';
import { BiHome } from 'react-icons/bi';
import Pagination from '../Pagination/Pagination';
import * as S from './SearchResultStyle';

/* 페이지네이션 알고리즘 구현하기
필요한 것들
1. 페이지 번호 구하기(총 몇개의 페이지가 필요한 지 구하기)
- Math.ceil(총 게시물 수/페이지당 표시할 게시물 수)
2. 현재 페이지 번호를 기준으로 표시해줘야할 게시물들의 범위 파악
(현재 페이지의 첫 게시물의 index 파악하기)
- (페이지 번호 - 1) * 페이지당 표시할 게시물 수
*/

function SearchResults({ places, submenu2, scrollToSection }) {
  // 검색 결과 렌더링과 선택 항목을 iframe으로 띄우기 위한 상태값
  const [placeList, setPlaceList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  // 페이지네이션을 위한 상태값
  const [limit, setLimit] = useState(5); // 페이지 당 표시할 게시물
  const [page, setPage] = useState(1); // 현재 페이지가 몇 페이지인지의 상태값
  const offset = (page - 1) * limit;

  const toggleResultDetails = (e) => {
    setIsOpen(!isOpen);
    setUrl(e.target.value);
    scrollToSection(submenu2);
  };

  useEffect(() => {
    setPlaceList(places);
  }, [places]);

  return (
    <S.ResultsLayout>
      <S.ResultsBox>
        <S.ResultsLayoutUl>
          {placeList.slice(offset, offset + limit).map((place) => (
            <S.SearchResultLi key={Math.random()}>
              <S.ResultIconBox>
                {place.place_name.includes('병원') && <FaStethoscope />}
                {place.place_name.includes('의료') && <FaStethoscope />}
                {place.place_name.includes('약국') && <CgPill />}
                {place.place_name.includes('보호') && <BiHome />}
                {place.place_name.indexOf('병원') === -1 &&
                  place.place_name.indexOf('의료') === -1 &&
                  place.place_name.indexOf('약국') === -1 &&
                  place.place_name.indexOf('보호') === -1 && <FaDog />}
              </S.ResultIconBox>
              <S.PlaceName>{place.place_name}</S.PlaceName>
              <S.PlaceInfoBtn
                type="button"
                value={place.place_url}
                onClick={toggleResultDetails}
              >
                상세정보
              </S.PlaceInfoBtn>
            </S.SearchResultLi>
          ))}
        </S.ResultsLayoutUl>
      </S.ResultsBox>
      <div>
        {places.length !== 0 && (
          <Pagination
            total={placeList.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
      <S.IframeBox ref={submenu2}>
        {isOpen && <S.ResultIframe url={url} allowFullScreen />}
        <S.InfoCloseBtn type="button" onClick={() => setIsOpen(false)}>
          닫기
        </S.InfoCloseBtn>
      </S.IframeBox>
    </S.ResultsLayout>
  );
}

export default SearchResults;
