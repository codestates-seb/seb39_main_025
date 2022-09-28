import styled from 'styled-components';

export const InfiniteScrollLayout = styled.div`
  width: 600px;
  overflow: auto;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  height: 300px;
  max-width: 400px;
  min-width: 200px;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    min-width: 300px;
    margin: 20px auto;
  }
`;

export const SuggestionLayout = styled.div`
  width: 90%;
  margin: auto;
  @media screen and (max-width: 479px) {
    width: 95%;
  }

  & h2 {
    width: 100%;
    padding: 15px 0px;
    border-bottom: 1px solid #ddd;
    color: #efac59;
    text-align: center;
    font-size: 17px;
  }
`;
export const ProfileCircle = styled.div`
  width: 60px;
  height: 60px;

  @media screen and (max-width: 479px) {
    width: 50px;
    height: 50px;
  }
  border: 3px solid transparent;
  border-radius: 50%;
  overflow: hidden;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #1d3561 0%, orange 100%);
  border-image: linear-gradient(to right, #1d3561 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 479px) {
      border: #fff solid 2px;
    }
    border: #fff solid 3px;
    border-radius: 100%;
  }
`;

export const SuggestUserBox = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  padding: 10px;
  box-sizing: border-box;
`;
export const UserName = styled.div`
  width: 80%;
  box-sizing: border-box;
  padding-left: 20px;
  line-height: 15px;
  margin: 5px;
  p {
    font-weight: 600;
  }
  span {
    color: #aaa;
    font-size: 10px;
  }
`;
export const FollowButton = styled.button`
  color: #1d3561;
  background-color: transparent;
  border: none;
  outline: none;
  height: 30px;
  font-size: 13px;
  cursor: pointer;
`;
