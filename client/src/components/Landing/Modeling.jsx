/* eslint-disable react/no-unknown-property */
import React from 'react';
import { OrbitControls, Float } from '@react-three/drei';
import Shiba from './Shiba';
import * as S from './ModelingStyles';

function Modeling() {
  return (
    <S.ModelingLayout>
      <S.ModelCanvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
          <Shiba />
        </Float>
      </S.ModelCanvas>
    </S.ModelingLayout>
  );
}

export default Modeling;
