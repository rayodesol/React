import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditionalRender() {
  const [state, setState] = useState('1번');
  // const [condition, setCondition] = useState(true); // 강사님 코드
  const [condition, setCondition] = useState('1번'); // 강사님 코드 (props, 버튼 내용 바뀌기)

  // 내 코드
  const onChange = () => {
    state === '1번' ? setState('2번') : setState('1번');
  };

  const switchComponent = state === '1번' ? <PracticeOne /> : <PracticeTwo />;

  // 강사님 코드
  const onChange2 = () => {
    // setCondition(!condition);

    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <>
      {/* 강사님 코드 */}
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange2}>{condition}</button>

      {/* 내 코드 */}
      {/* {switchComponent}
      <button onClick={onChange}>{state}</button> */}
    </>
  );
}
