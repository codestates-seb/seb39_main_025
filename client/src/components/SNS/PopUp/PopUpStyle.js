import styled from 'styled-components';
import { Dropdown } from 'antd';

// 좋아요 팝업 알림 창
export const AlarmLayOut = styled.div`
  position: relative;

  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 5px;
    height: 40px;
  }
  & span {
    margin-left: 5px;
    font-size: 14px;
  }

  & .ballon {
    /* display: none; */
    position: absolute;
    width: 100px;
    box-sizing: border-box;
    padding: 5px;
    left: -40px;
    bottom: -40px;
    background: #efac59;
    color: white;
    border-radius: 5px;
  }
  & .ballon:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #efac59;
    content: '';
    position: absolute;
    top: -9px;
    right: 34px;
  }
`;

export const AlarmPopupLayout = styled.div``;

// 모바일 디테일 팝업 창
export const MobileDetailLayOut = styled(Dropdown)`
  & button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 5px;
    height: 40px;
  }
  & .anticon svg {
    display: none;
  }
`;
