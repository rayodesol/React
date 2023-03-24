// 클래스형 컴포넌트
import React, { Component } from "react";

// 컴포넌트로부터 상속 받아야!
class MainHeader extends Component {
  // 일종의 변수를 선언하는 것.
  constructor() {
    super();
    this.cas = true;
  }

  // render() 함수 사용해야!
  render() {
    return <h1>Hello, {this.cas ? "캬~" : "노맛!"} world!</h1>;
  }
}

export default MainHeader;

// 아래 코드는 함수형 컴포넌트
// function MainHeader() {
//   const pororo = "뽀로로";
//   const friend = "친구들";
//   const arr = [1, 2, 3, 4, 5];
//   const cas = true;

//   // 리턴에서 if문은 못 씀. 삼항 연산자는 가능.
//   return (
//     // <h1>Hello, {pororo + friend} world!</h1>
//     // <h1>{arr.map((el) => el)}</h1>
//     <h1>{cas ? "캬하" : "노맛"}</h1>
//   );
// }

// export default MainHeader; // 바깥으로 빼주기. App.js 에서 불러서 사용.
