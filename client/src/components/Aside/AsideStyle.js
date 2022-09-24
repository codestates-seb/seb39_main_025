import styled from 'styled-components';

/*
Aside 컴포넌트 전체에서 스타일이 엄청 복잡하게 많이 들어갈 것 같지 않을것 같아,
우선 AsideStyles.js에서 Aside 안의 여러 컴포넌트들의 스타일들을 정의하도록
짜는 방식으로 생각하고 버튼에 대한 스타일만 정의해 두었습니다.
추후 슬기님께서 편한 방식으로 바꾸시고 싶다면 내용 공유 해주세요:)
*/

// * 마이페이지, 유기견 지도api 관련 페이지 Aside 전체 컨테이너

// * SNS 피드 Aside 내부 최상단 4가지 버튼영역 div 박스
export const AsideTopBtnBox = styled.div`
  width: max-content;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AsideTopButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  &.weekly-button img {
    width: 40px;
    height: 40px;
  }
`;
export const UserProfile = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  background-color: #aaa;
  margin-right: 10px;
`;

export const SnsAsideLayout = styled.div``;
