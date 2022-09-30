import React, { useRef } from 'react';
import styled from 'styled-components';
import * as S from '../components/Aside/Left/Styles';
import { scrollToSection } from '../utils/scrollToSection';
import Arrow from '../assets/right-arrow.png';
import AdoptContents from '../components/Map/adopt/AdoptContents';

function AdoptPetPage() {
  const submenu1 = useRef(null);
  const submenu2 = useRef(null);
  const submenu3 = useRef(null);

  return (
    <AdoptPetPageLayout>
      <AsideSection>
        <S.SectionTitleBox>
          <S.SectionTitle>유기견 입양</S.SectionTitle>
          <img src={Arrow} alt="" />
        </S.SectionTitleBox>
        <S.LeftAsideListContainer>
          <S.ListItem>
            <h3>
              <S.ListItemBtn
                type="button"
                onClick={() => scrollToSection(submenu1)}
              >
                입양 상담 센터
              </S.ListItemBtn>
            </h3>
          </S.ListItem>
          <S.ListItem>
            <h3>
              <S.ListItemBtn
                type="button"
                onClick={() => scrollToSection(submenu2)}
              >
                메뉴 2 바로가기
              </S.ListItemBtn>
            </h3>
          </S.ListItem>
          <S.ListItem>
            <h3>
              <S.ListItemBtn
                type="button"
                onClick={() => scrollToSection(submenu3)}
              >
                메뉴 3 바로가기
              </S.ListItemBtn>
            </h3>
          </S.ListItem>
        </S.LeftAsideListContainer>
      </AsideSection>
      <ContentSection>
        <S.SectionSubTitle>유기견 입양</S.SectionSubTitle>
        <AdoptContents
          method="adopt"
          submenu1={submenu1}
          submenu2={submenu2}
          submenu3={submenu3}
        />
      </ContentSection>
    </AdoptPetPageLayout>
  );
}

export default AdoptPetPage;

const AdoptPetPageLayout = styled.div`
  padding: 100px 0 0 100px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    padding: 0;
  }

  @media screen and (max-width: 479px) {
  }
`;

const AsideSection = styled.div`
  width: 20%;
  height: 100%;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 20px;

  @media screen and (max-width: 479px) {
    padding-left: none;
  }
`;
