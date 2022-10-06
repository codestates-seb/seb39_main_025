import styled from 'styled-components';
import { Container } from '../../../GlobalStyle';

export const SingleFeedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  position: relative;
  margin: auto;
`;

export const SingleFeedLayout = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;

export const SingleFeedInfinite = styled.div`
  margin: auto;
  border-top: 1px solid #ddd;
  width: 500px;
  min-width: 500px;
  /* width: fit-content; */
  overflow: auto;
  @media screen and (max-width: 479px) {
    max-width: 400px;
    min-width: 400px;
  }
  @media screen and (max-width: 375px) {
    max-width: 370px;
    min-width: 370px;
  }
`;
