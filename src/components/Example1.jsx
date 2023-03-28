import React from "react";

export default function Example1() {
  const str = "Hello, first exercise _ 강사님 코드";

  return (
    // style 객체로 전달. {} 로 묶어.
    <div
      style={{ marginTop: "32px", backgroundColor: "skyblue" }}
      onClick={() => {
        alert("클릭 됨");
      }}
    >
      {str}
    </div>
  );
}
