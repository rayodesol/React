import React from "react";

export default function CustomList({ arr }) {
  return (
    <div>
      <ul>
        {arr?.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
