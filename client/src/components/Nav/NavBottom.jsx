import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBottomLayout, NavBottomUl, NavBottomLi } from './NavBottomStyle';

function NavBottom() {
  const [asideMenuTap, setAsideMenuTap] = useState(0);
  const asideMenuList = [
    { id: 0, name: 'SNS', element: '/sns' },
    { id: 1, name: '마이페이지', element: '/mypage' },
    { id: 2, name: '유기견 신고하기', element: '/alert' },
    { id: 3, name: '유기견 입양하기', element: '/adopt-pet' },
  ];
  const asidemenuClickHandler = (id) => {
    setAsideMenuTap(id);
  };
  return (
    <NavBottomLayout>
      {asideMenuList.map(({ id, name, element }) => {
        return (
          <NavBottomUl key={id}>
            <NavLink to={element} className="navlink">
              <NavBottomLi
                index={id}
                className={asideMenuTap === id ? 'active' : ' '}
                onClick={() => asidemenuClickHandler(id)}
              >
                {name}
              </NavBottomLi>
            </NavLink>
          </NavBottomUl>
        );
      })}
    </NavBottomLayout>
  );
}

export default NavBottom;
