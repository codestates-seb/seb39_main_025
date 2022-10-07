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

export const SingleFeedReplyTimeAndButton = styled.span`
  display: flex;
  justify-content: flex-end;
  & button {
    border: none;
    background-color: transparent;
    font-size: 14px;
    color: #efac59;
    cursor: pointer;
  }
`;

export const SingleFeedReplyLayout = styled.div`
  widows: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px;
  color: #000;
`;

export const ReplyBox = styled.div`
  font-size: 13px;
  & span {
    font-weight: 600;
    margin-right: 10px;
    font-size: 15px;
  }
`;

export const RepleContentDiv = styled.div`
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.02),
    0px 7.5px 6px rgba(0, 0, 0, 0.05);
  padding: 20px 10px;
  margin-bottom: 10px;
  position: relative;
  background-color: #fff;
  display: flex;
  .comment {
    padding: 0px 20px;
  }
  .modal-Control {
    padding: 10px;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: 0;
    bottom: 0;
    display: flex;
    .more {
      background-color: transparent;
      border: none;
    }
    span {
      user-select: none;
      margin: auto;
    }
    .modal {
      position: absolute;
      top: 15px;
      right: 10px;
      width: 80px;
      height: 60px;
      overflow: hidden;
      padding: 10px 0px;
      cursor: auto;
      display: flex;
      align-content: center;
      justify-content: space-between;
      align-items: center;
      background-color: whitesmoke;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03),
        0px 7.5px 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      button {
        border: none;
        width: 100%;
        background-color: transparent;
        &.delete {
          color: red;
        }
        :hover {
          transition: 0.5s;
          background-color: rgba(255, 255, 255, 0.5);
          color: #efac59;
          cursor: pointer;
        }
      }

      p {
        color: black;
      }
    }
  }
  .author {
    display: flex;
    margin-bottom: 5px;
    justify-content: space-between;
    align-items: center;
    .userInfo {
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        font-weight: bold;
        color: darkgrey;
        margin-left: 10px;
      }
    }
  }

  .time {
    font-size: 10px;
    margin-bottom: 5px;
    color: lightgrey;
  }
  p {
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

export const RepleUploadDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  form {
    width: 100%;
    display: grid;

    grid-template-columns: 7fr 1fr;
    /* grid-template-rows: 50px; */

    @media (max-width: 756px) {
      grid-template-columns: 4fr 1fr;
      grid-template-rows: 40px;
    }
    .reple-edit-input {
      padding: 10px;
      height: 100%;
      border-radius: 10px 0px 0px 10px;
      border: 0.5px solid #c6c6c6;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border-radius: 0px 10px 10px 0px;
      border: 0.5px solid #c6c6c6;
      font-weight: bold;
      background-color: #c6c6c6;
      &:hover,
      &:active {
        border: 0.5px solid darkgrey;
        background-color: darkgrey;
      }
    }
  }

  .cancel {
    display: flex;
    justify-content: flex-end;
    button {
      margin-top: 5px;
      font-size: 12px;
      border-radius: 10px;
      padding: 5px;
      border: 1px solid #c6c6c6;
    }
  }
`;
