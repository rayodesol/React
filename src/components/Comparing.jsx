import React, { useRef, useState } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State:', countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log('Ref:', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Var:', countVar);
  };

  // 리렌더링만 하는 함수
  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State UP!</button>
      <button onClick={countUpRef}>Ref UP!</button>
      <button onClick={countUpVar}>Variable UP!</button>
      <button onClick={reRender}>reRender</button>
    </div>
  );
}
