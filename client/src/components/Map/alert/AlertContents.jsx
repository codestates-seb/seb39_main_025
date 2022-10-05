import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import KakaoMap from '../KakaoMap';
import * as S from '../Styles';

function AlertContents({ method, submenu1, submenu2, scrollToSection }) {
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  // * 검색 입력값 onChange 이벤트핸들러
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // * 지도검색버튼 클릭시 이벤트핸들러
  const handleSearchInput = (e) => {
    e.preventDefault();
    if (value === '') return alert('검색할 장소를 입력하세요');
    let temp = value;
    if (method === 'alert') {
      temp += ' 동물';
      setKeyword(temp);
    }
    if (method === 'adopt') {
      setKeyword('유기견 보호소');
    }
    return setValue('');
    // 재사용하는 컴포넌트임으로 함수가 조건에 따라 다르게 동작해야 함.
    // method === 'alert'일 경우 가까운 보호소 찾기 오청 실행
    // method === 'adopt'일 경우 입양 가능한 센터 찾기 요청 실행
  };
  return (
    <S.NearCenterLayout>
      <S.SectionTitle ref={submenu1}>근처 보호소 찾기</S.SectionTitle>
      <S.SearchInputWrapper>
        <S.InputDescBox>
          <FaMapMarkerAlt />
          {method === 'alert' && <span>보호소 위치</span>}
          {method === 'adopt' && <span>입양 가능한 센터</span>}
        </S.InputDescBox>
        <S.SearchForm>
          <S.SearchInput
            type="text"
            onChange={onChange}
            name="place"
            placeholder="OO시"
            required
          />
          <S.SearchBtn type="button" onClick={handleSearchInput} value="검색">
            {method === 'alert' && <span>가까운 보호소 찾기</span>}
            {method === 'adopt' && <span>입양 가능한 센터 찾기</span>}
          </S.SearchBtn>
        </S.SearchForm>
      </S.SearchInputWrapper>
      <KakaoMap
        method={method}
        keyword={keyword}
        submenu2={submenu2}
        scrollToSection={scrollToSection}
      />
    </S.NearCenterLayout>
  );
}

export default AlertContents;
