import styled from 'styled-components';

export const FooterLayout = styled.footer`
  box-sizing: border-box;
  width: 100%;
  background-color: #1d3561;
  display: flex;
  flex-direction: column;
  font-size: 9px;
  justify-content: space-evenly;
  padding: 50px 50px;
  @media screen and (max-width: 479px) {
    padding: 20px 20px;
  }
`;

export const FooterLogoBox = styled.div``;

export const FooterTextContainer = styled.div`
  margin-top: 20px;
  display: flex;
`;
export const FooterLeftText = styled.div`
  color: #f8c82f;
  width: 50%;
  margin-right: 5%;
  line-height: 13px;
`;

export const FooterRightText = styled.div`
  margin-left: 5%;
  color: #fff;
  display: flex;
  line-height: 10px;
  width: 45%;
  justify-content: space-evenly;
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
  & ul:last-child {
    @media screen and (max-width: 479px) {
      margin-top: 10px;
    }
  }
`;
