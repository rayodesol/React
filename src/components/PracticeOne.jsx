import React from 'react';

// PracticeTwo 와 비교해서, 구조 분해 할당을 쓰는 이 코드가 더 좋음.
export default function PracticeOne({ text }) {
  return (
    <>
      {/* <h1>1번 컴포넌트</h1> */}
      <h1>{text} 컴포넌트</h1>
    </>
  );
}
