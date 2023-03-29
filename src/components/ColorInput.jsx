import React, { useRef } from 'react';

export default function ColorInput() {
  const inputValue = useRef();
  const divEl = useRef();

  const changeBg = () => {
    // value 값은 항상 문자열로 들어가서 따로 문자열 처리 안 해줘도 됨.
    divEl.current.style.backgroundColor = inputValue.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputValue} type="text" />
      <br />
      <button onClick={changeBg}>색 적용</button>
    </div>
  );
}
