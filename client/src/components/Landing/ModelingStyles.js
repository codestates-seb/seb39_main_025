import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';

/* 
3d모델링 파일 영역이 어디까진지 확인하기 위한 임시 스타일링입니다. 
자유롭게 바꿔주셔도 됩니다!
*/

// * 캔버스영역 크기를 여기 부모에서 줘야 먹어서 이쪽에 값 주었습니다
export const ModelingLayout = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 0;
  /* border: 1px solid #fff; */
`;

export const ModelCanvas = styled(Canvas)``;
