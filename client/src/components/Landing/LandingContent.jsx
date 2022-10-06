import TypeIt from 'typeit-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneAlert } from 'react-icons/ai';
import { GiDogBowl } from 'react-icons/gi';
import { Button } from '../../GlobalStyle';
import Modeling from './Modeling';
import Scroll from './Scroll';
import * as S from './Styles';
import Phone from '../../assets/mobile.png';
import Sns from '../../assets/mobileSns.png';
import Paw from '../../assets/paw-active.png';
import Left from '../../assets/alert.png';
import Right from '../../assets/adopt.png';

function LandingContent() {
  return (
    <S.LandingContentLayout>
      <S.ContentLayout>
        <S.LandingTitleDesc>
          <S.LandingText>
            STAY, <br />
            <TypeIt
              options={{
                speed: 200,
                cursorChar: '',
                loop: 'true',
              }}
            >
              BUDDY
            </TypeIt>
          </S.LandingText>
        </S.LandingTitleDesc>
        <S.LandingTitleBottom>
          <S.ScrollWrapper>
            <h3> STAY, TOGETHER</h3>
            <Scroll />
            <S.SigninBtn yellow>
              <NavLink to="/sign-up">회원가입 하기 </NavLink>
            </S.SigninBtn>
          </S.ScrollWrapper>
        </S.LandingTitleBottom>

        <Modeling />
      </S.ContentLayout>

      <section className="second">
        <div className="sns-div">
          <img src={Phone} alt="모바일 목업" className="phone" />
          <div className="sns-box">
            <img
              src={Sns}
              alt="모바일 sns 페이지"
              style={{ width: '250px' }}
              className="sns-page"
            />
          </div>
        </div>
        <div className="sns-text">
          <h2>
            스테이버디 소셜네트워크를 통해 <br /> 반려견 소식과 정보를 나누어
            보세요
          </h2>
          <p>
            <img src={Paw} alt="강아지 발바닥 아이콘" /> 내 댕댕이 남사친 여사친
            만들어 댕싸 되기
          </p>
          <p>
            <img src={Paw} alt="강아지 발바닥 아이콘" /> 주인 잃은 강아지 발견시
            이미지로 빠르게 주변에 알리기
          </p>
          <p>
            <img src={Paw} alt="강아지 발바닥 아이콘" /> 나의 버디하고 유기동물
            센터 봉사 체험 하기
          </p>
          <Button className="sns-button">
            <NavLink to="/sns"> SNS 구경하기 </NavLink>
          </Button>
        </div>
      </section>
      <section className="third">
        <div className="alert">
          <div className="alert-box">
            <img src={Left} alt="" />
          </div>
          <div className="alert-text">
            <h5>
              <span>
                <AiTwotoneAlert style={{ color: '#FFA9A9' }} />
              </span>{' '}
              유기견 신고
            </h5>
            <p>
              유기견을 발견하셨을때 당황하시지 말고 스테이 버디에 알려주세요
            </p>
            <Button yellow>
              <NavLink to="/alert">신고 페이지 </NavLink>
            </Button>
          </div>
        </div>

        <div className="adopt">
          <div className="adopt-text">
            <h5>
              <span>
                <GiDogBowl style={{ color: '#87B286' }} />
              </span>
              유기동물 입양
            </h5>
            <p> 유기동물 입양을 원하시면 스테이버디가 친절하게 알려 드릴께요</p>
            <Button>
              <NavLink to="/adopt-pet"> 입양 페이지</NavLink>
            </Button>
          </div>

          <div className="adopt-box">
            <img src={Right} alt="" />{' '}
          </div>
        </div>
      </section>
    </S.LandingContentLayout>
  );
}

export default LandingContent;
