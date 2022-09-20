import styled from 'styled-components';

export const SingleFeedReqplyLayout = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 10px;
  box-sizing: border-box;
`;

export const SingleFeedReplyInput = styled.input`
  width: 100%;
  box-shadow: 5px 5px 5px 50px inset rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

export const SingleFeedReplyTimeAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #efac59;
    cursor: pointer;
  }
`;

export const SingleFeedReplyCreated = styled.div`
  margin-top: 10px;
  font-size: 9px;
`;
export const SingleFeedReplyLayout = styled.div`
  widows: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  color: #000;
`;
export const ReplyBox = styled.div`
  widows: 90%;
  display: flex;
  align-items: center;
  font-size: 13px;
  & span {
    font-weight: 600;
    margin-right: 10px;
    font-size: 15px;
  }
`;
export const ReplyUserProfile = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const ReplyContent = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    width: 50px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  & input {
    border-radius: 5px;
    border: none;
    background-color: #ddd;
    padding: 5px;
  }
`;
