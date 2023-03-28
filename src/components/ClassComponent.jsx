// { Component } ; 원형이 되는 컴포넌트 가져오는 것.
import React, { Component } from "react";

class ClassComponent extends Component {
  // 상속 받아 사용.
  render() {
    return <h1 className="test">Class Component 입니다!</h1>;
  }
}

export default ClassComponent;
