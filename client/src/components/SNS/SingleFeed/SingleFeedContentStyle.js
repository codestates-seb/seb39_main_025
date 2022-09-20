import styled from 'styled-components';

export const SigleFeedContentLayout = styled.div`
  background-color: #fff;
  color: #000;
  padding: 10px;
`;

export const ContentIcons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IconButton = styled.div`
  display: flex;
  & button {
    /* z-index: 1; */
    cursor: pointer;
    margin-right: 5px;
    border: none;
    background-color: #fff;
  }
`;
export const CaraouselIcon = styled.div`
  margin: auto;
`;
export const Likes = styled.p`
  font-weight: 700;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  & button {
    border: none;
    background-color: transparent;
    color: #aaa;
    cursor: pointer;
  }
`;

export const UserId = styled.span`
  font-weight: 700;
  margin-right: 10px;
  width: 50px;
`;

export const UserComment = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &.more {
    text-overflow: initial;
    white-space: wrap;
    overflow: initial;
    white-space: pre-line;
  }
`;
