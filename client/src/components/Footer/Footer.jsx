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
          <address>
            STAY,BUDDY Co., Ltd. <br />
            Tel.1544-7979ㅣEmail : contact@staybuddy.com <br />
            Business License No : 123-45-678910 [사업자정보확인] <br />
            E-Commerce Registration : 2022-Seoul Gangnam-1234 <br />
            Address : 200th floor, 17, Teheran-ro 44-gil, Gangnam-gu, Seoul,
            Republic of Korea
          </address>
        </FooterLeftText>
        <FooterRightText>
          <div>
            <p>POLICY</p>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>이용안내</p>
            <p>반품,환불규정</p>
            <p>제휴입점문의 </p>
          </div>
          <div>
            <p>C/S CENTER</p>
            <p>MON-FRIㅣ09:30 - 17:00</p>
            <p>LUNCH ㅣ 12:30 - 13:30</p>
            <p>SAT, SUN, HOLIDAY OFF</p>
            <p>카카오톡 플러스친구 @스테이 버디</p>
          </div>
        </FooterRightText>
      </FooterTextContainer>
    </FooterLayout>
  );
}

export default Footer;
