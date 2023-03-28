import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    // 구조분해할당 한 경우
    const { name, age, nickName } = this.props;

    return (
      <div>
        <h1>이름 : {name}</h1>
        <h2>나이 : {age}</h2>
        <h2>별명 : {nickName}</h2>
      </div>

      // // 구조분해할당 안 할 경우
      // <div>
      //   <h1>이름 : {this.props.name}</h1>
      //   <h2>나이 : {this.props.age}</h2>
      //   <h2>별명 : {this.props.nickName}</h2>
      // </div>
    );
  }
}
