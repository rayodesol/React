import React from 'react';
import { useRef } from 'react';

export default function RefDomControl() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    // current 까지 와야 DOM 요소에 접근 가능
    orangeEl.current.style.backgroundColor = 'orange'; // 카멜 케이스로 적어줘야
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };

  const clearInput = () => {
    inputEl.current.value = '';
  };

  return (
    <div>
      <h1 ref={orangeEl}>오렌지</h1>
      <h1 ref={skyblueEl}>하늘색</h1>
      <input ref={inputEl} type="text" />
      {/* input 태그가 인라인 요소이므로 한 줄 띄기 */}
      <br />
      <button onClick={adjustCSS}>CSS 적용</button>
      <button onClick={clearInput}>input 초기화</button>
    </div>
  );
}
