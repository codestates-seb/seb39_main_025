import styled from 'styled-components';
import { Button } from '../../GlobalStyle';

export const NearCenterLayout = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 479px) {
  }
`;

export const SectionTitle = styled.h2`
  color: #efac59;
  margin-top: 50px;

  @media screen and (max-width: 479px) {
    margin-top: 5px;
  }
`;

// * 검색인풋창 영역
export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;

  @media screen and (max-width: 479px) {
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
  }
`;

export const InputDescBox = styled.div`
  display: flex;
  align-items: center;

  span {
    padding-left: 5px;
    font-weight: 500;
  }
`;

export const SearchForm = styled.form`
  width: 70%;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    row-gap: 10px;
  }
`;

export const SearchInput = styled.input`
  margin-right: 30px;
  width: 50%;
  height: 30px;
  border: none;
  background-color: #d9d9d9;
  border-radius: 70px;

  ::placeholder {
    padding-left: 10px;
  }

  @media screen and (max-width: 479px) {
    margin: 0;
    width: 100%;
  }
`;

export const SearchBtn = styled(Button)`
  padding: 5px 20px;
  font-size: 13px;
  font-weight: 500;
`;

// * 지도 영역

export const MapContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 400px;
  border: 1px solid black;
`;
