import styled from 'styled-components';

export const NavLayout = styled.nav`
  width: 100%;
  height: ${({ navBig }) => (navBig ? '160px' : '80px')};
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const NavTopLayout = styled.div`
  height: 50%;
  background-color: #fff;
  width: 100%;
`;
export const NavBottomLayout = styled.div`
  height: 50%;
  background-color: #1d3561;
  width: 100%;
`;

export const MainLogo = styled.image`
  height: 20px;
`;
