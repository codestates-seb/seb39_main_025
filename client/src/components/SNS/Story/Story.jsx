import React, { useState } from 'react';
import * as S from './Styles';
import Modal from './Modal';

function Story({ id, src, index, username }) {
  const [isOpen, setIsOpen] = useState(false);
  const [persent, setPersent] = useState('0%');

  const timer = () => {
    setTimeout(() => {
      setPersent('0%');
    }, 1000);
    setTimeout(() => {
      setPersent('20%');
    }, 2000);
    setTimeout(() => {
      setPersent('40%');
    }, 3000);
    setTimeout(() => {
      setPersent('60%');
    }, 4000);
    setTimeout(() => {
      setPersent('80%');
    }, 5000);
    setTimeout(() => {
      setPersent('100%');
    }, 6000);
    setTimeout(() => {
      setPersent('0%');
      setIsOpen(false);
    }, 6500);
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
    timer();
  };
  return (
    <S.StoryDivBox>
      <S.StoryCircle
        id={id}
        className={String(index) === id ? 'selected' : null}
        onClick={handleOpenModal}
      >
        <img src={src} alt="" />
      </S.StoryCircle>
      <S.StoryUsername>{username}</S.StoryUsername>
      <Modal
        src={src}
        isOpen={isOpen}
        handleOpenModal={handleOpenModal}
        username={username}
        persent={persent}
      />
    </S.StoryDivBox>
  );
}

export default Story;
