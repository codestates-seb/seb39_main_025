import styled from 'styled-components';

export const FriendsListLayout = styled.div`
  width: 30%;
  border: solid #efac59 1px;
  background-color: #1d3561;
  color: #efac59;
  box-sizing: border-box;
`;

export const userBox = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #efac59;
  padding: 1rem;
`;

export const FriendsBox = styled.div`
  height: 80px;
  width: 100%;
  padding: 1rem;
`;

export const ChatBoxLayout = styled.div`
  width: 70%;
  border: solid #efac59 1px;
  box-sizing: border-box;
`;

export const ChatBox = styled.div`
  width: 100%;
  height: 600px;
  padding: 1rem;
  box-sizing: border-box;
`;

export const ChatInputBox = styled.div`
  width: 95%;
  padding: 5px;
  border-radius: 35px;
  border: 1px solid #1d3561;
  height: 35px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  & input {
    width: 90%;
    height: 100%;
    border: none;
  }
  & img {
    width: 20px;
    cursor: pointer;
  }
`;
