import styled from 'styled-components';

export const AsideLayout = styled.div`
  position: fixed;
  right: 0;
  background-color: #fff;
  width: 300px;
  height: 100vh;

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const AsideTopBtnBox = styled.div`
  width: 100%;
  height: 50px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  // * 모달창에서 attrs 메서드 사용하는 이유: 스크린 리더 상에서 태그 설명 등 웹 접근성
  role: 'dialog', // dialog -> 모달창임을 나타내는 role
}))`
  // TODO : Modal창 CSS를 구현합니다.
  position: relative; // 추가
  width: 130px; // 추가
  height: 100px; // 추가
  background-color: #fff; // 추가
  text-align: center; // 추가
  border-radius: 7px; // 추가
  font-size: 14px; // 추가

  > .closingBtn {
    position: absolute; // 추가
    top: 1px; // 추가
    right: 1px; // 추가
    border: none; // 추가
    background-color: transparent; // 추가
    cursor: pointer; // 추가
  }
`;
