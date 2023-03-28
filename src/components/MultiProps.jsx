import React from "react";

// export default function MultiProps(props) {
//   return (
//     <div>
//       <h1>{props.userID} 님 반갑습니다!</h1>
//       <a href={props.href}>{props.text}</a>
//     </div>
//   );
// }

// 구조분해할당으로 인자 받기 - 가장 추천되는 방법!!
export default function MultiProps({ userID, href, text }) {
  return (
    <div>
      <h1>{userID} 님 반갑습니다!</h1>
      <a href={href}>{text}</a>
    </div>
  );
}

// // 구조분해할당
// export default function MultiProps(props) {
//   const { userID, href, text } = props;
//   return (
//     <div>
//       <h1>{userID} 님 반갑습니다!</h1>
//       <a href={href}>{text}</a>
//     </div>
//   );
// }
