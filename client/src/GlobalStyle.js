import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export const Layout = styled.main`
  width: 100%;
  height: max-content;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  max-width: 1330px;
  margin: 0 auto;

  @media screen and (max-width: 479px) {
  }
`;

export const Container = styled.div`
  color: black;
  padding: 0 160px;
  background-color: #fff;

  @media screen and (max-width: 479px) {
    padding: 0;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ yellow }) => (yellow ? '#EFAC59' : '#1D3561')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '15px 70px' : '10px 40px')};
  font-weight: 300;
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
    transition: 0.5s;
    box-shadow: 200px 0 0 0 rgba(255, 255, 255, 0.2) inset;
    z-index: 1;
  }
`;

export default GlobalStyle;
