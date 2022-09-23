import styled from 'styled-components';

// * 1. Stories 전체의 레이아웃
export const StoriesLayout = styled.div`
  /* 1.1 Stories 컴포넌트 전체의 레이아웃 영역 */
  width: max-content;
  margin: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .right {
    margin-left: auto;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const StoryContainer = styled.section`
  /* 1.2 Stories 컨테이너 */
  display: flex;
  column-gap: 10px;

  .arrow {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 479px) {
    width: 95%;
  }
`;

export const StoryContents = styled.article`
  margin: 0 20px;
  width: 580px;
  height: 190px;
  display: flex;
  align-items: center;

  /* story가 5개 이상의 넘치는 부분 y축으로 스크롤처리 + 스크롤바 숨기기 */
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  column-gap: 20px;

  @media screen and (max-width: 479px) {
    width: 300px;
  }
`;

export const ArrowIconBtn = styled.button`
  /* 1.2 좌우 선택 전환 화살표 버튼. img태그 감싸고 있음 */
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
  }
  @media screen and (max-width: 479px) {
  }
`;

// * 2. Story 단건 레이아웃
export const StoryDivBox = styled.div`
  /* 스토리 단건 - 원형 이미지 모달토글탭, 유저이름 두가지를 감싼다 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoryCircle = styled.article`
  /* 2.1 스토리 단건 하나의 레이아웃 영역 */
  cursor: pointer;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  transition: all 0.3s;
  transition-timing-function: ease;

  &.selected {
    width: 150px;
    height: 150px;
  }
  &:hover {
    width: 150px;
    height: 150px;
    transition: all 0.3s;
    transition-timing-function: ease;

    @media screen and (max-width: 479px) {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (max-width: 479px) {
    width: 80px;
    height: 80px;
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
    border: #fff solid 5px;
    border-radius: 100%;
  }
`;

export const StoryUsername = styled.h3`
  font-size: 13px;
  padding: 5px;
`;
