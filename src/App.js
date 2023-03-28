import logo from "./logo.svg";
import "./App.css";

import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import Example1 from "./components/Example1";
import State from "./components/State";
import State2 from "./components/State2";
import Counter from "./components/Counter";
import Condition from "./components/Condition";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";

import MainHeader from "./components/MainHeader"; // mainHeader 만 쳐도 자동 완성됨.

// 실습 - 3/24 컴포넌트 만들기
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  // const str = "Hello, JSX World!";

  // function amazingJSX() {
  //   return "amazingJSX";
  // }

  // function alertFunc() {
  //   alert("JSX is amazing");
  // }

  // const test = "test";

  // 실습 - 3/27 JSX 문법 활용하기
  const styleObj = { marginTop: "32px", backgroundColor: "skyblue" };
  const helloStr = "Hello, first exercise";

  function alertFunc() {
    alert("클릭 됨");
  }

  return (
    <div className="App">
      {/* state 와 변수 */}
      <StateAndVariable />

      {/* 클래스형 컴포넌트 */}
      {/* <ClassState /> */}

      {/* <Condition /> */}

      {/* 실습 - 3/27 카운터 만들기 */}
      {/* <Counter /> */}

      {/* <State2 />
      <State /> */}

      {/* 실습 - 강사님 코드 */}
      {/* <Example1 />
      <div
        className="ex"
        style={styleObj}
        onClick={() => {
          alertFunc();
        }}
      >
        {helloStr}
      </div> */}

      {/* <EventHandler /> */}
      {/* <Inline /> */}

      {/* 자바스크립적 요소는 다 중괄호 안에! but, if문은 불가. */}
      {/* <div className={test}>
        {typeof test === "string" ? "문자열" : "문자열 아님"}
      </div> */}

      {/* <img src={logo} alt="로고" /> */}

      {/* strict? 모드여서 2번 실행됨. */}
      {/* {alertFunc()} */}

      {/* {amazingJSX()} */}
      {/* {str} */}

      {/* 아래는 3/24 수업 */}
      {/* 컴포넌트는 이 div 태그 사이에 넣으면 됨!! */}

      {/* 태그 1개 단독으로 쓸 때는 <... /> 로 닫아주는 것이 좋음 */}
      {/* <MainHeader /> */}

      {/* 실습 - 3/24 컴포넌트 만들기 */}
      {/* <h1>클래스형 컴포넌트 - ImgComponent 컴포넌트</h1>
      <ImgComponent />
      <h1>클래스형 컴포넌트 - BtnToNaver 컴포넌트</h1>
      <BtnToNaver /> */}

      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
    </div>
  );
}

export default App;
