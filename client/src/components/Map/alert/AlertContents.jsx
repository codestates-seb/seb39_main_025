import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import KakaoMap from '../KakaoMap';
import * as S from '../Styles';

function AlertContents({ method, submenu1 }) {
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  // 카카오 api 전역 사용

  // * 유기견 위치 신고 시 이벤트핸들러(지도검색과 별개, db에 위치신고정보 데이터 제출요청용)
  const submitAlertLocation = (e) => {
    e.preventDefault();
    console.log(value);
  };

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
      console.log(temp);
      setKeyword(temp);
    }
    if (method === 'adopt') {
      temp += ' 유기견 입양';
      console.log(temp);
      setKeyword(temp);
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
      <KakaoMap method={method} keyword={keyword} />
    </S.NearCenterLayout>
  );
}

export default AlertContents;