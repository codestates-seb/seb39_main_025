import React, { useState } from 'react';
import * as S from './Styles';

function LeftAside({ id, name, handleAsideIdx }) {
  return (
    <S.LeftAsideLayout>
      <S.LeftAsideBtnRow>
        <S.LeftAsideBtn type="button" onClick={handleAsideIdx} id={id}>
          {name}
        </S.LeftAsideBtn>
      </S.LeftAsideBtnRow>
    </S.LeftAsideLayout>
  );
}

export default LeftAside;
