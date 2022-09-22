import styled from 'styled-components';

export const NavBottomLayout = styled.nav`
  height: 50%;
  background-color: #1d3561;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

export const NavBottomUl = styled.ul`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  @media screen and (max-width: 479px) {
    width: 100%;
    font-size: 10px;
  }
  & .navlink {
    text-decoration: none;
    color: #fff;

    &.navlink.active {
      transition: 0.5s;
      background-color: #efac59;
      color: #1d3561;
      transition: 0.5s;
    }
  }
`;
export const NavBottomLi = styled.li`
  width: 200px;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 50px 0px;
  @media screen and (max-width: 479px) {
    width: 110px;
    padding: 30px 0px;
  }
`;
