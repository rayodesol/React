import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* 조건부 렌더링 - show 값에 따라 <PracticeTime /> 보이기/안 보이기 */}
      {show && <PracticeTimer />}
      <button
        onClick={() => {
          // 상태변화 함수에서 콜백 형태로 하는 것이 안전!
          setShow((cur) => !cur);
        }}
      >
        {show ? '숨기기/언마운트' : '보이기'}
      </button>
    </>
  );
}
