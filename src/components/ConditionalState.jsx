import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditionalState() {
  const [condition, setCondition] = useState('보이기');

  const onChange = () => {
    condition == '보이기' ? setCondition('감추기') : setCondition('보이기');
  };

  // 변수에 넣어 처리. 2번 이상 반복 되면 함수화 시키기!!
  const conditionalRender = condition === '감추기' && <ConditionalRender />;

  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
      {conditionalRender}
    </>
  );
}
