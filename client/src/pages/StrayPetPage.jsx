import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import * as S from '../components/Aside/Left/Styles';
import { scrollToSection } from '../utils/scrollToSection';

function StrayPetPage() {
  const submenu1 = useRef(null);
  const submenu2 = useRef(null);
  const submenu3 = useRef(null);

  return (
    <StrayPetPageLayout>
      <AsideSection>
        <div>유기견 신고하기</div>
        <S.LeftAsideBtnRow>
          <button type="button" onClick={() => scrollToSection(submenu1)}>
            메뉴1 위치로
          </button>
        </S.LeftAsideBtnRow>
        <S.LeftAsideBtnRow>
          <button type="button" onClick={() => scrollToSection(submenu2)}>
            메뉴2 위치로
          </button>
        </S.LeftAsideBtnRow>
        <S.LeftAsideBtnRow>
          <button type="button" onClick={() => scrollToSection(submenu3)}>
            메뉴3 위치로
          </button>
        </S.LeftAsideBtnRow>
      </AsideSection>

      <ContentSection>
        <div ref={submenu1}>
          <div>메뉴1</div>
        </div>
        <div ref={submenu2}>
          <div>메뉴2</div>
        </div>
        <div ref={submenu3}>
          <div>메뉴3</div>
        </div>
      </ContentSection>
    </StrayPetPageLayout>
  );
}

export default StrayPetPage;

const StrayPetPageLayout = styled.div`
  border: 3px solid gray;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
  }
`;

const AsideSection = styled.div`
  border: 1px solid red;
  width: 20%;
  height: 100%;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  border: 1px solid blue;
  width: 80%;
  height: 100%;
`;
