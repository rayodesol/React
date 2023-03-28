import React from "react";
import { useState } from "react";

export default function Condition() {
  // const [condition, setcondition] = useState(true);
  const [cnt, setCnt] = useState(0);

  return (
    <div>
      {/* <h1>{condition ? "👍" : "😭"}</h1>
      <button onClick={() => setcondition(!condition)}>컨디션 변경</button> */}

      {/* 실습 - 3/27 좋아요 버튼 만들기 */}
      {/* 컨텐츠에 삼항연산자 사용 */}
      {/* 현재 상태 값을 current(cur) 로 설정해, 변경. 콜백 형태이므로, state 값이 기억이 안 날 경우에 사용. 어디서 동일한 형태이므로 편함. */}
      {/* 계속 리랜더링이 되는 것 */}
      <button
        onClick={() => setCnt((current) => current + 1)}
        style={{ fontSize: "30px", width: "60px" }}
      >
        {cnt > 10 ? "😎" : "👍"}
      </button>
      <h1>{cnt}</h1>
    </div>
  );
}
