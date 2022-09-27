import React, { useRef } from 'react';
import styled from 'styled-components';
import * as S from '../components/Aside/Left/Styles';
// import LeftAside from '../components/Aside/Left/LeftAside';
import KakaoMap from '../components/Map/KakaoMap';
import { scrollToSection } from '../utils/scrollToSection';
import Arrow from '../assets/right-arrow.png';

function AlertPage() {
  // 스크롤 위치 이동을 위해 useRef 사용
  const submenu1 = useRef(null);
  const submenu2 = useRef(null);
  const submenu3 = useRef(null);

  return (
    <AlertPageLayout>
      <AsideSection>
        <S.SectionTitleBox>
          <S.SectionTitle>유기견 신고</S.SectionTitle>
          <img src={Arrow} alt="" />
        </S.SectionTitleBox>
        <S.LeftAsideListContainer>
          <S.ListItem>
            <h3>
              <S.ListItemBtn
                type="button"
                onClick={() => scrollToSection(submenu1)}
              >
                유기견 발견 신고하기
              </S.ListItemBtn>
            </h3>
          </S.ListItem>
          <S.ListItem>
            <h3>
              <S.ListItemBtn
                type="button"
                onClick={() => scrollToSection(submenu2)}
              >
                근처 보호소 찾기
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
        <S.SectionSubTitle>유기견 신고</S.SectionSubTitle>
        <KakaoMap
          id="map"
          method="alert"
          submenu1={submenu1}
          submenu2={submenu2}
          submenu3={submenu3}
        />
      </ContentSection>
    </AlertPageLayout>
  );
}

export default AlertPage;

const AlertPageLayout = styled.div`
  padding: 100px 0 0 100px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 479px) {
    padding: 0;
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
    width: 100%;
    padding: 0 30px;
    padding-left: none;
  }
`;
