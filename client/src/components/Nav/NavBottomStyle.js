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
  align-items: center;
  font-size: 20px;

  @media screen and (max-width: 479px) {
    width: 100%;
    font-size: 10px;
  }
  & .navlink {
    text-decoration: none;
    color: #fff;
  }
  .active {
    transition: 0.5s;
    background-color: #efac59;
    color: #1d3561;
  }
`;
export const NavBottomLi = styled.li`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 50px 60px;

  @media screen and (max-width: 479px) {
    padding: 30px 35px;
  }
`;
