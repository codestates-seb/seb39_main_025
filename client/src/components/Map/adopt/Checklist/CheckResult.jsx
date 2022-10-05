import React from 'react';

function CheckResult({ score }) {
  const resultRenderer = () => {
    if (score === 10) {
      return <p>완벽한 예비 보호자이시군요!</p>;
    }
    if (score >= 7) {
      return <p>꼼꼼히 준비하셨어요!</p>;
    }
    if (score >= 5) {
      return <p>다시 한번 고려해주세요.</p>;
    }
    return <p>안돼요.</p>;
  };

  return <div>{resultRenderer()}</div>;
}

export default CheckResult;
