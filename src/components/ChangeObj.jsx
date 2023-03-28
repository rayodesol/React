import React from "react";
import { useState } from "react";

export default function ChangeObj(props) {
  // 인덱스 값을 바꾸는 식으로 풀이
  const [idx, setIdx] = useState(0);

  // 데이터 바인딩으로 코드 줄이기
  let obj = props.objArr[idx];

  // 인덱스가 배열 크기를 넘어갈 때 처리 방법들
  // 방법 1 - 함수
  const changeProfile = () => {
    if (idx === props.objArr?.length - 1) {
      // 끝까지 갔을 때
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };
  // 방법 2 - 삼항연산자

  return (
    <div>
      <h1>프로필</h1>
      <h2>이름 : {obj.name}</h2>
      <h3>나이 : {obj.age}</h3>
      <h3>별명 : {obj.nickName}</h3>
      <hr />

      {/* 방법 1 */}
      <button onClick={changeProfile}>프로필 변경 - 함수</button>

      {/* 방법 2 - 삼항연산자 */}
      {/* setIdx 콜백함수 형태로 */}
      <button
        onClick={() => {
          idx === props.objArr.length - 1
            ? setIdx((cur) => 0)
            : setIdx((cur) => cur + 1);
        }}
      >
        프로필 변경 - 삼항연산자
      </button>

      {/* 내 코드 */}
      {/* <button onClick={() => setIdx((idx + 1) % props.objArr.length)}>
        프로필 변경
      </button> */}
    </div>
  );
}
