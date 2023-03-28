import React from "react";
import { useState } from "react";

export default function State() {
  const [teacher, setTeacher] = useState("이효석"); // 보통 'set변수명'(카멜 케이스) 로 함수명 지정. "이효석"이 초기값.

  // let teacher = "이효석";

  // function inEnglish() {
  //   // 자바스크립트적으로 구현
  //   const spanEl = document.querySelector("#text");
  //   spanEl.innerHTML = "tetz";

  //   // teacher = "tetz";
  //   // console.log(teacher);
  // }

  return (
    <div>
      <button onClick={() => setTeacher("tetz")}>영어로!</button>

      {/* 자바스크립트적으로 구현 */}
      {/* <button onClick={() => inEnglish()}>영어로!</button> */}
      <br />
      <span id="text">{teacher}</span>
    </div>
  );
}
