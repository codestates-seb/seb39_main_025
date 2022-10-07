import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './AsideMenuStyle';

function AsideMenu() {
  const userId = window.localStorage.getItem('userId');
  const asideMenuList = [
    { id: 0, name: '나의 정보', element: '/mypage' },
    { id: 1, name: '회원 정보 수정', element: `/mypage-edit` },
  ];
  return (
    <S.AsideSection>
      <S.LeftAsideListContainer>
        {asideMenuList.map(({ id, name, element }) => {
          return (
            <S.ListItem key={id} index={id}>
              <NavLink to={element} className="aside">
                {name}
              </NavLink>
            </S.ListItem>
          );
        })}
      </S.LeftAsideListContainer>
    </S.AsideSection>
  );
}

export default AsideMenu;
