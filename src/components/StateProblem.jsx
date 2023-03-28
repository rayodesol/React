import React, { useState } from "react";

export default function StateProblem() {
  // // 배열 버전
  // const [state, setState] = useState([0]); // 숫자 0이 들어간 배열

  // 객체 버전
  const [state, setState] = useState({ teacher: "이효석" });
  console.log(state);

  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          // // 배열 버전 ------------------------------------------
          // state[0] = 1;

          // // 주소가 바뀌진 않음 -> 변화가 일어나지 않음
          // setState(state);

          // // 새로운 배열을 만들어 전달하면 됨.
          // const copyArr = [...state];
          // setState(copyArr);

          // 객체 버전 ---------------------------------------------
          state.teacher = "tetz";

          // 리렌더링이 일어나지 않음.
          // setState(state);

          // 새로운 객체를 만들어 전달.
          const copyObj = { ...state };
          setState(copyObj);

          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
