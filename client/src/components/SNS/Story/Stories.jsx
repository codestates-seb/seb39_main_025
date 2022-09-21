import React, { useState } from 'react';
import Story from './Story';
import * as S from './Styles';
import Left from '../../../assets/left-arrow.png';
import Right from '../../../assets/right-arrow.png';
import { aboutdata } from '../../../data/data';

function Stories() {
  const [index, setIndex] = useState(0);

  return (
    <S.StoriesLayout>
      <S.StoryContainer>
        <S.ArrowIconBtn
          type="button"
          onClick={() => index !== 0 && setIndex((prev) => prev - 1)}
        >
          <img
            src={Left}
            alt="select left side story from current user story"
          />
        </S.ArrowIconBtn>
        <S.StoryContents>
          {/* // TODO: 기능 구현 시 Story 컴포넌트는 서버로부터 받은 데이터로 map 하면 됩니다 */}
          {aboutdata.data.map((story) => {
            return (
              <Story
                id={story.id}
                key={story.id}
                src={story.src}
                index={index}
                username={story.username}
              />
            );
          })}
        </S.StoryContents>
        <S.ArrowIconBtn
          type="button"
          onClick={() => setIndex((prev) => prev + 1)}
        >
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
