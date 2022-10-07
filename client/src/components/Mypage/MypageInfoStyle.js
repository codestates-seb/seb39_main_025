import styled from 'styled-components';
import { Button } from '../../GlobalStyle';

export const MyInfoLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 3rem;
  margin-bottom: 15rem;
  position: relative;
  h1 {
    color: #efac59;
  }
`;

export const MyInfoBox = styled.div`
  margin-top: 50px;
  width: 300px;
`;
export const MyInfoFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    border-radius: 100%;
    object-fit: fill;
  }
`;

export const MobileButton = styled(Button)`
  display: none;
  margin-top: 100px;
  @media screen and (max-width: 479px) {
    display: block;
  }
`;
