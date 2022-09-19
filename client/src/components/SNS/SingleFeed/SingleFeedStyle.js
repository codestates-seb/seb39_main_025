import styled from 'styled-components';
import { Container } from '../../../GlobalStyle';

export const SingleFeedLayout = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
`;

export const SingleFeedContainer = styled(Container)`
  margin: auto;
  max-width: 500px;
  position: relative;
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
