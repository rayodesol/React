import React, { useRef, useState } from 'react';

export default function RandomQuiz() {
  // 가장 중요한 state 를 맨 위에 적어야.
  const [again, setAgain] = useState(true); // 정답일 때 리렌더링 하게 하기 위함
  const answerInput = useRef();

  const fisrtRandomNumber = Math.floor(Math.random() * 10); // Math.floor 는 버림
  const secondRandomNumber = Math.floor(Math.random() * 10);
  const arithmeticArr = ['+', '-', 'x'];
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);
  const operator = arithmeticArr[randomArithmetic];

  // input 창 비우고, 포커스 되는 함수
  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  // 정답 판별 함수
  const checkAnswer = () => {
    // 정답 계산
    let answer = 0; // undefined 값 방지

    // 연산자 별 계산
    if (randomArithmetic === 0) {
      answer = fisrtRandomNumber + secondRandomNumber;
    } else if (randomArithmetic === 1) {
      answer = fisrtRandomNumber - secondRandomNumber;
    } else {
      answer = fisrtRandomNumber * secondRandomNumber;
    }

    // input 값과 정답 비교
    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      setAgain(!again); // 리렌더링 시켜 숫자 변수들이 초기화됨
      clearInput();
    } else {
      alert('틀렸습니다!');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {fisrtRandomNumber} {operator} {secondRandomNumber}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
