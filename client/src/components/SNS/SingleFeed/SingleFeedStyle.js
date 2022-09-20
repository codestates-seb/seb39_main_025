import styled from 'styled-components';
import { Container } from '../../../GlobalStyle';

export const SingleFeedLayout = styled.div`
  border-top: 1px solid #ddd;
  max-width: 500px;
  margin: auto;
`;

export const SingleFeedContainer = styled(Container)`
  margin: auto;
  width: 100%;
  position: relative;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
