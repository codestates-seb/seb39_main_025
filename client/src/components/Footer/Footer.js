import React from 'react';
import {
  FooterLayout,
  FooterLogoBox,
  FooterLeftText,
  FooterRightText,
  FooterTextContainer,
} from './FooterStyle';
import footerlogo from '../../assets/footerLogo.png';

function Footer() {
  return (
    <FooterLayout>
      <FooterLogoBox>
        <img src={footerlogo} alt={footerlogo} />
      </FooterLogoBox>
      <FooterTextContainer>
        <FooterLeftText>
          <ul>
            <li>STAY,BUDDY Co., Ltd.</li>
            <li>Tel.1544-7979ㅣEmail : contact@staybuddy.com</li>
            <li>Business License No : 123-45-678910 [사업자정보확인]</li>
            <li>E-Commerce Registration : 2022-Seoul Gangnam-1234</li>
            <li>
              Address : 200th floor, 17, Teheran-ro 44-gil, Gangnam-gu, Seoul,
              Republic of Korea
            </li>
          </ul>
        </FooterLeftText>
        <FooterRightText>
          <ul>
            <li>POLICY</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>이용안내</li>
            <li>반품,환불규정</li>
            <li>제휴입점문의 </li>
          </ul>
          <ul>
            <li>C/S CENTER</li>
            <li>MON-FRIㅣ09:30 - 17:00</li>
            <li>LUNCH ㅣ 12:30 - 13:30</li>
            <li>SAT, SUN, HOLIDAY OFF</li>
            <li>카카오톡 플러스친구 @스테이 버디</li>
          </ul>
        </FooterRightText>
      </FooterTextContainer>
    </FooterLayout>
  );
}

export default Footer;
