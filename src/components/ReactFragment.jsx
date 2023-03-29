// <> 로 묶으면, 이 import 문 안 써도 됨.
import React from 'react';

export default function ReactFragment() {
  return (
    // App.css 가 제대로 적용됨.
    // <>
    //   <h1>안녕하세요!</h1>
    //   <span>반갑습니다!</span>
    // </>

    <React.Fragment>
      <h1>안녕하세요!</h1>
      <span>반갑습니다!</span>
    </React.Fragment>

    // 기존 div 로 묶는 방법
    // App.css 가 제대로 적용되지 않음.
    // <div>
    //   <h1>안녕하세요!</h1>
    //   <span>반갑습니다!</span>
    // </div>
  );
}
