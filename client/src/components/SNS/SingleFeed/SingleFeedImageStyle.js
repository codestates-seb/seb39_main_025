import styled from 'styled-components';

export const SingleFeedImageLayout = styled.div`
  width: 100%;
  height: 350px;
  background-color: #ddd;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SingleFeedImageCounter = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 45px;
  height: 30px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
