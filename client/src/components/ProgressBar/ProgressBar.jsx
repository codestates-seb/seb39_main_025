import React from 'react';
import styled from 'styled-components';

function ProgressBar({ persent }) {
  return (
    <BarBoundary>
      <BarInside persent={persent} />
    </BarBoundary>
  );
}

export default ProgressBar;

const BarBoundary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 20px;
  position: absolute;
  border: 1px solid black;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const BarInside = styled.div`
  height: 3px;
  background-color: #ffffff;
  text-align: center;
  width: ${(props) => props.persent};
  transition: 0.5s;
`;
