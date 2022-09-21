import React, { useState } from 'react';
import * as S from './Styles';
import Modal from './Modal';

function Story({ id, src, index, username }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(!isOpen);

  return (
    <>
      <S.StoryCircle
        id={id}
        className={String(index) === id ? 'selected' : null}
        onClick={handleOpenModal}
      >
        <img src={src} alt="" />
      </S.StoryCircle>
      <Modal
        src={src}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleOpenModal={handleOpenModal}
        username={username}
      />
    </>
  );
}

export default Story;
