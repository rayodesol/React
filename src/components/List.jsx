import React from "react";
import Modal from "./Modal";
import ListChild from "./ListChild";

export default function List() {
  const dataArr = [
    { title: "리액트 공부하기", todo: "state 사용법 익히기" },
    { title: "코테 문제 풀기", todo: "Lv 0 정복 가즈아" },
    { title: "한강 가기", todo: "경품 타기" },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <Modal />

      {/* map 함수 사용 - JS 문법이므로 {} 안에 사용 */}
      {/* 현재는 key 값을 index 로 해서 두 map 함수의 키 값들이 중복되지만, 보통은 백엔드의 primary key 사용 */}

      {/* 컴포넌트, props 사용하는 방법 - 이게 더 좋은 코드 */}
      {/* return 생략 */}
      {dataArr.map((el, index) => (
        <ListChild title={el.title} content={el.todo} key={index} />
      ))}

      {/* 단순 html 코드 리턴하는 방법 */}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        );
      })}

      {/* 배열을 다루기에 좋지 않은 코드 */}
      {/* <ListChild title={dataArr[0].title} content={dataArr[0].todo} />
      <ListChild title={dataArr[1].title} content={dataArr[1].todo} /> */}

      {/* <hr />
      <h2>리액트 공부하기</h2>
      <p>state 사용법 익히기</p>
      <hr />
      <h2>코테 문제 풀기</h2>
      <p>Lv 0 정복 가즈아</p>
      <hr /> */}

      <Modal />
    </div>
  );
}
