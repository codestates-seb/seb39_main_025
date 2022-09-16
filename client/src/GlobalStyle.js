import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        // font-family :
    }
`;

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1330px;
  margin: 0 auto;
  background-color: #e5e5e5;

  @media screen and (max-width: 479px) {
    padding: 0 30px;
    border: 3px solid yellow;
  }
`;

export const Container = styled.div`
  color: white;
  padding: 160px;
  background-color: #414141;

  @media screen and (max-width: 479px) {
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ yellow }) => (yellow ? '#EFAC59' : '#1D3561')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '15px 70px' : '10px 40px')};
  font-weight: 600;
  color: ${({ yellow }) => (yellow ? '#1D3561' : '#fff')};
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: 0.5px solid #eee;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1; // 호버 효과를 위해 before에선 -1, hover에선 1
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }

  &:hover:before {
    height: 200%;
  }

  &:hover {
    box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.5) inset;
    z-index: 1;
    color: black;
  }
`;

export default GlobalStyle;
