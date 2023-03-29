import React, { useRef, useState } from 'react';

export default function CalQuiz() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const idx = Math.floor(Math.random() * 3);
  const op = ['+', '-', '*'];
  const answer = eval(num1 + op[idx] + num2);

  const inputEl = useRef();

  const [quiz, setQuiz] = useState(true);

  // 함수 ; 정답 판별 & 새로운 문제
  const isCorr = () => {
    console.log(quiz);

    if (inputEl.current.value === String(answer)) {
      alert('정답입니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
      setQuiz(!quiz);
    } else {
      alert('틀렸습니다. 다시 입력해 주세요');
      inputEl.current.value = '';
      inputEl.current.focus();
    }
  };

  return (
    <div>
      <h1>
        {num1}
        {op[idx]}
        {num2}
      </h1>
      <input ref={inputEl} type="text" />
      <button onClick={isCorr}>정답 제출!</button>
    </div>
  );
}
