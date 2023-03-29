import React, { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef(); // 초기값 설정 없이.
  const input2 = useRef();

  // 함수 표현식으로 함수 선언했음.
  const changeFocusOne = () => {
    input1.current.focus(); // current 까지 써야 input 태그(DOM 요소)에 접근 가능.
  };

  const changeFocusTwo = () => {
    input2.current.focus();
  };

  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <br />
      <br />
      <button onClick={changeFocusOne}>1번 인풋으로 포커스 보내기</button>
      <button onClick={changeFocusTwo}>2번 인풋으로 포커스 보내기</button>
    </div>
  );
}
