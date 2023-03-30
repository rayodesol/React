import React, { useEffect } from 'react';

export default function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행 중');
    }, 1000);

    return () => {
      console.log('컴포넌트 언마운트, 타이머가 종료 됩니다!');
      // JS 기본 내장 함수
      clearInterval(timer);
    };
  }, []);

  return <div>타이머 실행 중</div>;
}
