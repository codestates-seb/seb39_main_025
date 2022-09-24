import React, { useState } from 'react';
import styled from 'styled-components';
import LeftAside from '../components/Aside/Left/LeftAside';
import ReportDogs from '../components/Map/alert/ReportDogs';
import NearCenter from '../components/Map/alert/NearCenter';

function AlertPage() {
  const [asideMenuTap, setAsideMenuTap] = useState(0);
  const menuTitles = [
    { id: 0, name: '유기견 신고' },
    { id: 1, name: '유기견 동물 센터' },
  ];

  const handleAsideIdx = (e) => {
    setAsideMenuTap(Number(e.target.id));
  };
  return (
    <AlertPageLayout>
      <AsideSection>
        {menuTitles.map(({ id, name }) => {
          return (
            <LeftAside
              key={id}
              id={id}
              name={name}
              handleAsideIdx={handleAsideIdx}
            />
          );
        })}
      </AsideSection>

      <ContentSection>
        {asideMenuTap === 0 && <ReportDogs />}
        {asideMenuTap === 1 && <NearCenter />}
      </ContentSection>
    </AlertPageLayout>
  );
}

export default AlertPage;

const AlertPageLayout = styled.div`
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
