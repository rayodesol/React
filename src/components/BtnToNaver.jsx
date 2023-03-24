import React, { Component } from "react";

class BtnToNaver extends Component {
  constructor() {
    super();
    this.addr = "https://www.naver.com/";
  }

  render() {
    return (
      <a href={this.addr} target="_blank" rel="noopener noreferrer">
        <button>네이버로 이동</button>
      </a>
    );
  }
}

export default BtnToNaver;

// // 함수형 컴포넌트
// function BtnToNaver() {
//   const addr = "https://www.naver.com/";

//   return (
//     // target="_blank" rel="noopener noreferrer" 안 써도 됨.
//     <a href={addr} target="_blank" rel="noopener noreferrer">
//       <button>네이버로 이동</button>
//     </a>
//   );
// }

// export default BtnToNaver;
