import React, { Component } from "react";

export default class ClassState extends Component {
  // // 구버전
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     teacher: "이효석",
  //   };
  // }

  // 신버전 ; constructor, this 사용하지 않음.
  state = {
    teacher: "이효석",
  };

  render() {
    // this.state.teacher 을 구조분해할당으로 아래같이.
    const { teacher } = this.state; // 구조분해할당 문법. state 객체에서 teacher 빼오겠다.
    return (
      <div>
        <h1>{teacher}</h1>
        {/* setState()는 무조건 객체. 반드시 인자를 객체로 받음. */}
        <button onClick={() => this.setState({ teacher: "tetz" })}>
          영어로!
        </button>
      </div>
    );
  }
}
