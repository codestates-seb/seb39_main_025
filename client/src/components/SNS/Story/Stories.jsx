import React from 'react';
import Story from './Story';
import * as S from './Styles';
import Left from '../../../assets/left-arrow.png';
import Right from '../../../assets/right-arrow.png';
import { aboutdata } from '../../../data/data';
import AButton from '../../Aside/AButtons';

function Stories() {
  const selectLeft = () => {
    // 데스크탑 일때 스크롤 당겨지는 픽셀
    if (window.screen.width > 479)
      document.getElementById('container').scrollLeft -= 600;
    // 모바일 일때 스크롤 당겨지는 픽셀
    if (window.screen.width < 480)
      document.getElementById('container').scrollLeft -= 300;
  };
  const selectRight = () => {
    if (window.screen.width > 479)
      document.getElementById('container').scrollLeft += 600;
    if (window.screen.width < 480)
      document.getElementById('container').scrollLeft += 300;
  };

  return (
    <S.StoriesLayout>
      <div className="right">
        <AButton />
      </div>
      <S.StoryContainer>
        <S.ArrowIconBtn className="arrow" type="button" onClick={selectLeft}>
          <img
            src={Left}
            alt="select left side story from current user story"
          />
        </S.ArrowIconBtn>
        <S.StoryContents id="container">
          {/* // TODO: 기능 구현 시 Story 컴포넌트는 서버로부터 받은 데이터로 map 하면 됩니다 */}
          {aboutdata.data.map((story) => {
            return (
              <Story
                id={story.id}
                key={story.id}
                src={story.src}
                username={story.username}
              />
            );
          })}
        </S.StoryContents>
        <S.ArrowIconBtn className="arrow" type="button" onClick={selectRight}>
          <img
            src={Right}
            alt="select right side story from current user story"
          />
        </S.ArrowIconBtn>
      </S.StoryContainer>
    </S.StoriesLayout>
  );
}

export default Stories;
