import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CheckList from '../../Checklist/CheckList';
import * as S from '../Styles';

function AdoptContents({ submenu1, submenu2 }) {
  return (
    <div>
      <div ref={submenu1}>
        <CheckList />
      </div>
      <S.SectionTitle ref={submenu2}>유기견 보호소 정보</S.SectionTitle>
      <S.SearchInputWrapper>
        <S.InputDescBox>
          <FaMapMarkerAlt />
          보호소 정보
        </S.InputDescBox>
        <S.SearchForm>
          <S.SearchInput type="text" placeholder="OO시" required />
          <S.SearchBtn type="button">유기견 보호소 정보조회</S.SearchBtn>
        </S.SearchForm>
      </S.SearchInputWrapper>
    </div>
  );
}

export default AdoptContents;
