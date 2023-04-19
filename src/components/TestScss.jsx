import React from 'react';
import '../style/TestScss.scss';

export default function TestScss() {
  return (
    // 클래스 이름은 마음대로 가능 component-root
    <div className="div-base">
      <h1>SCSS 테스트 컴포넌트</h1>
      <span>해당 컴포넌트를 SCSS로 꾸며 봅시다</span>
    </div>
  );
}
