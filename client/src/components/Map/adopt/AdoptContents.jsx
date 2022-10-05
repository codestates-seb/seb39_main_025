import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import KakaoMap from '../KakaoMap';
import CheckList from './Checklist/CheckList';
import * as S from '../Styles';

function AdoptContents({ submenu1, submenu2 }) {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <div ref={submenu1}>
        <CheckList />
      </div>
      <S.SectionTitle ref={submenu2}>유기견 보호소 정보</S.SectionTitle>
      <S.AdoptMapSearchDesc>
        <AiFillCaretDown />
        <span>전국의 보호소를 한번에 조회해보세요!</span>
      </S.AdoptMapSearchDesc>
      <S.AdoptSearchBtnRow>
        <S.SearchBtn type="button" onClick={() => setKeyword('유기견 보호소')}>
          검색
        </S.SearchBtn>
      </S.AdoptSearchBtnRow>
      <KakaoMap method="adopt" keyword={keyword} />
    </div>
  );
}

export default AdoptContents;
