import React, { useRef, useState } from 'react';

export default function CalQuiz() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const idx = Math.floor((Math.random() * 10) % 3);
  const op = ['+', '-', '*'];
  const answer = eval(num1 + op[idx] + num2);

  const inputEl = useRef();

  const quizObj = {
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
    idx: Math.floor((Math.random() * 10) % 3),
    answer: eval(num1 + op[idx] + num2),
  };

  const [quiz, setQuiz] = useState({ ...quizObj });

  // 함수 ; 정답 판별 & 새로운 문제
  const isCorr = () => {
    console.log(quiz);

    if (inputEl.current.value === String(answer)) {
      alert('정답입니다!');
      inputEl.current.value = '';
      inputEl.current.focus();
      setQuiz({ ...quizObj });
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
