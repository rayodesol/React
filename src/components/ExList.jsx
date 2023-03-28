import React from "react";
import ListChild from "./ListChild";

export default function ExList() {
  const toDo = [
    { title: "리액트 공부하기", content: "state 사용법 익히기" },
    { title: "코테 문제 풀기", content: "Lv 0 정복 가즈아" },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>

      {/* 제출 1 */}
      {/* <hr />
      <ListChild title="리액트 공부하기" content="state 사용법 익히기" />
      <hr />
      <ListChild title="코테 문제 풀기" content="Lv 0 정복 가즈아" />
      <hr /> */}

      {/* 제출 2 */}
      {toDo.map((el) => {
        return <ListChild title={el.title} content={el.content} />;
      })}
    </div>
  );
}
