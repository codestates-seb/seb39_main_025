import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Map from './Map';
import * as S from './Styles';

function KakaoMap({ method, submenu1, submenu2, submenu3 }) {
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');
  // 카카오 api 전역 사용

  // * 검색 입력값 onChange 이벤트핸들러
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // * 검색버튼 클릭시 이벤트핸들러
  const handleSearchInput = (e) => {
    e.preventDefault();
    if (value === '') alert('검색할 장소를 입력하세요');
    let temp = value;
    temp += ' 동물';
    console.log(temp);
    return setKeyword(temp);
    // 재사용하는 컴포넌트임으로 함수가 조건에 따라 다르게 동작해야 함.
    // method === 'alert'일 경우 가까운 보호소 찾기 오청 실행
    // method === 'adopt'일 경우 입양 가능한 센터 찾기 요청 실행
  };

  return (
    <S.NearCenterLayout>
      <S.SearchInputWrapper ref={submenu1}>
        <S.InputDescBox>
          <FaMapMarkerAlt />
          <span>발견 위치</span>
        </S.InputDescBox>
        <S.SearchForm>
          <S.SearchInput type="text" onChange={onChange} name="place" />
          <S.SearchBtn type="button" onClick={handleSearchInput} value="검색">
            {method === 'alert' && <span>가까운 보호소 찾기</span>}
            {method === 'adopt' && <span>입양 가능한 센터 찾기</span>}
          </S.SearchBtn>
        </S.SearchForm>
      </S.SearchInputWrapper>
      <div ref={submenu2}>
        {method === 'alert' && (
          <S.SectionTitle>주변 유기견 센터</S.SectionTitle>
        )}
        {method === 'adopt' && (
          <S.SectionTitle>입양 가능한 센터</S.SectionTitle>
        )}
      </div>
      <Map searchKeyword={keyword} />
      <div ref={submenu3}>
        <S.SectionTitle>메뉴3</S.SectionTitle>
      </div>
    </S.NearCenterLayout>
  );
}

export default KakaoMap;
