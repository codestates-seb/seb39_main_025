import styled from 'styled-components';

export const SingleFeedTopBarLayout = styled.div`
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 5px;
    height: 40px;
  }
`;

export const SingleFeedUser = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  cursor: pointer;
`;
export const SigleFeedUserProfile = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: solid 2px #efac59;
  margin-right: 10px;
`;
