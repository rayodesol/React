import React from "react";
import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      {/* setNum(num -= 1)} / setNum(num--)} 둘 다 안 됨*/}
      <button
        onClick={() => setNum(num - 1)}
        style={{ fontSize: "35px", width: "50px" }}
      >
        -
      </button>
      <button
        onClick={() => setNum(num + 1)}
        style={{ fontSize: "35px", width: "50px" }}
      >
        +
      </button>
    </div>
  );
}
