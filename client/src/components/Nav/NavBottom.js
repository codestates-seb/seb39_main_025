import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBottomLayout, NavBottomUl, NavBottomLi } from './NavBottomStyle';

function NavBottom() {
  const [asideMenuTap, setAsideMenuTap] = useState(0);
  const asideMenuList = [
    { id: 1, name: 'SNS', element: '/sns' },
    { id: 2, name: 'MYPAGE', element: '/mypage' },
    { id: 3, name: 'ALERT', element: '/alert' },
    { id: 4, name: 'STRAY PET', element: '/stray-pet' },
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
                className={asideMenuTap === id ? 'submenu active' : 'submenu'}
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
