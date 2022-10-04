import styled from 'styled-components';
import Iframe from 'react-iframe';
import { Button } from '../../../GlobalStyle';

export const ResultsLayout = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const ResultsBox = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 479px) {
  }
`;

export const ResultsLayoutUl = styled.ul`
  width: max-content;
  display: flex;

  @media screen and (max-width: 479px) {
    flex-direction: column;
    width: 300px;
  }
`;

export const SearchResultLi = styled.li`
  border-radius: 12px;
  margin: 10px;
  overflow: hidden;
  padding: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #efac59;
  }

  @media screen and (max-width: 479px) {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
  }
`;

export const ResultIconBox = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50%;
    height: 50%;
  }

  @media screen and (max-width: 479px) {
    width: 40px;
    height: 40px;
  }
`;

export const PlaceName = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: 12px;
    line-height: 1;
  }
`;

export const PlaceInfoBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: skyblue;
  font-size: 12px;

  @media screen and (max-width: 479px) {
    font-size: 10px;
  }
`;

export const InfoCloseBtn = styled(Button)`
  width: 200px;
  margin: 50px 0;
`;

export const IframeBox = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultIframe = styled(Iframe)`
  margin: 30px 0;
  width: 100%;
  height: 1000px;

  /* ::-webkit-scrollbar {
    display: none;
  } */

  @media screen and (max-width: 479px) {
    width: 350px;
  }
`;
