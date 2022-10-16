import styled from 'styled-components';
import Arrow from '../../assets/right-arrow.png';

export const AsideSection = styled.div`
  overflow: hidden;
  left: 0;
  width: 250px;
  height: 100px;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

// 하위메뉴들의 list 전체의 부모인 ul
export const LeftAsideListContainer = styled.ul`
  width: 100%;
  background-color: #fff;
`;

export const ListItem = styled.li`
  height: 50px;
  text-align: center;
  line-height: 50px;
  width: 100%;
  position: relative;
  cursor: pointer;
  width: 100%;
  color: #1d3561;
  .arrow {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .aside {
    display: block;
    text-decoration: none;
    color: #1d3561;
  }
  .aside.active {
    background-color: #1d3561;
    color: #efac59;
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: 95% 50%;
  }
`;
