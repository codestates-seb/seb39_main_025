import styled from 'styled-components';
import { Button } from '../../GlobalStyle';

export const NavLayout = styled.div`
  width: 100%;
  height: ${({ navBig }) => (navBig ? '160px' : '100px')};
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
  justify-content: space-between;
  padding: 0px 10px;
`;

export const MainLogo = styled.div`
  display: flex;
  width: 180px;
  height: 50%;
  margin-left: 3%;
  cursor: pointer;

  @media screen and (max-width: 479px) {
    margin-left: 1%;
    width: 20%;
    height: 30%;
  }
`;

export const NavIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 15px;
  height: 80%;
  width: 60%;

  @media screen and (max-width: 479px) {
    height: 70%;
    width: 30%;
  }
`;
export const NavIputBox = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: start;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
export const SearchIconImg = styled.img`
  height: 20px;
  cursor: pointer;
`;
export const NavSearchInput = styled.input`
  margin-left: 5%;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: #1d3561 solid 1px;
  outline: none;
  box-shadow: inset 5px 10px 10px 50px rgba(239, 172, 89, 0.08);
  @media screen and (max-width: 479px) {
    height: 100%;
    width: 70%;
  }
`;
export const NavSearchClose = styled(Button)`
  padding: 0 5px;
  border-radius: 100%;
  font-size: 8px;
  height: 100%;
  color: #fff;
`;

export const NavButton = styled.div`
  margin-right: 1%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 479px) {
    margin-right: 1%;
  }
`;

export const LogoutButton = styled(Button)`
  padding: 5px 15px;
  font-size: 1rem;
  @media screen and (max-width: 479px) {
    font-size: 13px;
  }
`;

export const NavButtonLogin = styled(Button)`
  width: 100px;
  height: 100%;
  padding: 5px 0;
  @media screen and (max-width: 479px) {
    width: 80px;
    font-size: 10px;
    height: 30px;
    padding: 0px 5px;
  }
`;
export const NavButtonRegister = styled(Button)`
  width: 100px;
  height: 100%;
  padding: 5px 0;

  @media screen and (max-width: 479px) {
    width: 80px;
    font-size: 10px;
    height: 30px;
    padding: 0px 5px;
  }
`;
