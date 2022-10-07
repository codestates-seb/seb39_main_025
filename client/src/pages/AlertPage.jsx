import React, { useRef } from 'react';
import styled from 'styled-components';
import * as S from '../components/Aside/Left/Styles';
// import LeftAside from '../components/Aside/Left/LeftAside';
import { scrollToSection } from '../utils/scrollToSection';
import Arrow from '../assets/right-arrow.png';
import AlertContents from '../components/Map/alert/AlertContents';

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
                근처 보호소 찾기
              </S.ListItemBtn>
            </h3>
          </S.ListItem>
        </S.LeftAsideListContainer>
      </AsideSection>

      <ContentSection>
        <S.SectionSubTitle>유기견 신고</S.SectionSubTitle>
        <AlertContents
          id="map"
          method="alert"
          submenu1={submenu1}
          submenu2={submenu2}
          scrollToSection={scrollToSection}
        />
      </ContentSection>
    </AlertPageLayout>
  );
}

export default AlertPage;

const AlertPageLayout = styled.div`
  padding: 90px 0px;
  margin-bottom: 200px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

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
