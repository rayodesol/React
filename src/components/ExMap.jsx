import React from "react";
import ExMapChild from "./ExMapChild";

export default function ExMap() {
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    },
  ];

  return (
    <div>
      <h1 style={{ backgroundColor: "skyblue" }}>컴포넌트, props 사용</h1>
      {items.map((el, index) => (
        <ExMapChild key={index} item={el.item} price={el.price} />
      ))}

      <br />

      <h1 style={{ backgroundColor: "skyblue" }}>일반 코드로 그리기</h1>
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h2>품목명 : {el.item}</h2>
            <p>가격 : {el.price}</p>
          </div>
        );
      })}
    </div>
  );
}
