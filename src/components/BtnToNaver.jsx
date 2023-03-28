import { Component } from "react";

class BtnToNaver extends Component {
  // const addr = "https://www.naver.com/";

  // 이렇게 할 필요 없음.
  // constructor() {
  //   super();
  //   this.addr = "https://www.naver.com/";
  // }

  render() {
    return (
      <a
        href="https://www.naver.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
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
