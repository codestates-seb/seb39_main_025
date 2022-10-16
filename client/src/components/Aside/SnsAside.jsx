import React from 'react';
import Suggestion from '../SNS/Suggestion/Suggestion';
import { SnsAsideLayout } from './AsideStyle';

function SnsAside({ items }) {
  return (
    <SnsAsideLayout>
      <Suggestion items={items} />
    </SnsAsideLayout>
  );
}

export default SnsAside;
