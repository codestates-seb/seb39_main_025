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
  display: flex;
  align-items: center;
`;
export const NavBottomLayout = styled.div`
  height: 50%;
  background-color: #1d3561;
  width: 100%;
`;

export const MainLogo = styled.div`
  display: flex;
  width: 200px;
  height: 60%;
  margin-left: 5%;
  & img {
    object-fit: fill;
  }

  @media screen and (max-width: 479px) {
    margin-left: 5%;
    width: 150px;
    height: 50%;
  }
`;

export const NavSearchInput = styled.div`
  width: 40%;
  margin-left: 5%;
  height: 30px;

  @media screen and (max-width: 479px) {
    height: 20px;
  }
  & .nav-search-input {
    width: 100%;
    height: 100%;
    background-color: #ddd;
    border-radius: 2px;
    border: none;
    outline: none;
  }
`;

export const NavIconBox = styled.div`
  height: auto;
  margin-left: 2%;
  & .nav-search-icon {
    height: 100%;
  }

  @media screen and (max-width: 479px) {
    height: 20px;
  }
`;

export const NavButton = styled.div`
  width: 100%;
  display: flex;
`;
