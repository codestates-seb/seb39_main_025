import React from 'react';
import { MdClose } from 'react-icons/md';
import { FaRegPaperPlane } from 'react-icons/fa';
import ProgressBar from '../../ProgressBar/ProgressBar';
import * as S from './ModalStyle';

function Modal({ persent, isOpen, src, username, handleOpenModal }) {
  return (
    <S.ModalLayout isOpen={isOpen}>
      <S.ModalContainer src={src}>
        <ProgressBar persent={persent} />
        <img src={src} alt="" />
        <S.ModalHeader>
          <S.UserInfoBox>
            <img src={src} alt="" />
            <h3>{username}</h3>
            {/* 아래 span 태그는 추후 서버로부터 포스팅된 날짜 받은 값으로 받습니다 */}
            <span>1h</span>
          </S.UserInfoBox>
          <S.ModalCloseBtn onClick={handleOpenModal}>
            <MdClose />
          </S.ModalCloseBtn>
        </S.ModalHeader>
        <S.DmInputForm>
          <S.Input type="text" placeholder="Send Message" />
          <S.DmSubmitBtn>
            <FaRegPaperPlane />
          </S.DmSubmitBtn>
        </S.DmInputForm>
      </S.ModalContainer>
    </S.ModalLayout>
  );
}

export default Modal;
