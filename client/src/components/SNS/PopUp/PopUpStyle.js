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

  & .ballon {
    & span {
      font-size: 11px;
      margin-left: 5px;
      img {
        width: 20px;
      }
    }
    position: absolute;
    width: 100px;
    box-sizing: border-box;
    padding: 5px;
    left: -30px;
    bottom: -30px;
    background: #efac59;
    color: white;
    border-radius: 5px;
    @media screen and (max-width: 479px) {
      width: 90px;
    }
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

export const AlarmPopupLayout = styled.div`
  font-size: 11px;
`;

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
