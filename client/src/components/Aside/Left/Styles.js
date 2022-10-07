import styled from 'styled-components';

// 현재 Aside 메뉴가 속한 페이지의 주제를 나타내는 Aside 상단부 div 박스
export const SectionTitleBox = styled.div`
  padding: 10px;
  background-color: #1d3561;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 10px;
    height: 10px;
  }
`;

// 현새 Aside 메뉴가 속한 페이지의 주제를 나타내는 h1 텍스트
export const SectionTitle = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: #efac59;
  font-weight: 500;
`;

// 하위메뉴들의 list 전체의 부모인 ul
export const LeftAsideListContainer = styled.ul`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;

export const ListItemBtn = styled.button`
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  h3 {
    color: #1d3561;
  }
`;

export const SectionSubTitle = styled.h2`
  color: #efac59;
  margin-left: 20px;
`;
