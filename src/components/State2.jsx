import React from "react";
import { useState } from "react";

export default function State2() {
  const [strState, setStrState] = useState("init"); // 에러 막기 위해 가급적 const 로 선언하기!

  function changeState() {
    strState += "-";
    console.log(strState);
  }

  function customSetStrState() {
    setStrState("변경 됨");
  }

  return (
    <div>
      <button onClick={() => setStrState(strState + "+")}>
        리랜더링 반복!
      </button>
      <button onClick={customSetStrState}>커스텀 함수 호출</button>

      {/* const 선언해서, 클릭하면 에러 생김 */}
      <button onClick={() => changeState()}>스테이트 강제 변경!</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
