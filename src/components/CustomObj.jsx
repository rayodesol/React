import React from "react";

export default function ExMapChild(props) {
  // const { name, age, nickName } = props.obj;

  // props.obj 가 전달되지 않았을 때를 대비
  // props.obj 값이 들어왔을 때
  if (props.obj) {
    const { name, age, nickName } = props.obj;

    return (
      <div>
        <h1>이름 : {name}</h1>
        <h2>나이 : {age}</h2>
        <h2>별명 : {nickName}</h2>
      </div>
    );
  } else {
    return <div>데이터가 없습니다.</div>;
  }
}
