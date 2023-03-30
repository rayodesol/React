import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(false); // 컴포넌트 리렌더링 용
  const time = useRef(0); // 시간 기록용. 렌더링 되어도 값이 유지되므로.
  // const [print, setPrint] = useState(0); // 내 코드

  useEffect(() => {
    // setInterval 함수를 통해 1초마다 시간 증가
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    // 언마운트 됐을 때 실행되는 부분
    return () => {
      clearInterval(timer); // timer 멈춤
      console.log('컴포넌트 언마운트, 타이머가 종료 됩니다!');
    };
  }, []); // Dependency Array 가 빈 배열로, 마운트될 때 1번만 실행되게

  return (
    <>
      {/* useRef 값으로 시간 표시 - 리렌더링 전까지 변화 되지 않음 */}
      <h1>{time.current}</h1>
      <button onClick={() => setRender((cur) => !cur)}>시간 출력</button>
    </>
  );
}
