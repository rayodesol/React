import logo from "./logo.svg";
import "./App.css";

// 3/24 수업
import MainHeader from "./components/MainHeader"; // mainHeader 만 쳐도 자동 완성됨.

// 실습 - 3/24 컴포넌트 만들기
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

// 3/27 수업
import Inline from "./components/Inline";
import EventHandler from "./components/EventHandler";
import Example1 from "./components/Example1";
import State from "./components/State";
import State2 from "./components/State2";
import Counter from "./components/Counter";
import Condition from "./components/Condition";
import ClassState from "./components/ClassState";
import StateAndVariable from "./components/StateAndVariable";

// 3/28 수업
import StateProblem from "./components/StateProblem";
import List from "./components/List";
import PropsHeader from "./components/PropsHeader";
import MultiProps from "./components/MultiProps";
import ClassProps from "./components/ClassProps";
import ExList from "./components/ExList";
import ExMap from "./components/ExMap";
import CustomList from "./components/CustomList";
import CustomObj from "./components/CustomObj";
import ExPropsState from "./components/ExPropsState";

function App() {
  // const str = "Hello, JSX World!";

  // function amazingJSX() {
  //   return "amazingJSX";
  // }

  // function alertFunc() {
  //   alert("JSX is amazing");
  // }

  // const test = "test";

  // // 실습 - 3/27 JSX 문법 활용하기
  // const styleObj = { marginTop: "32px", backgroundColor: "skyblue" };
  // const helloStr = "Hello, first exercise";

  // function alertFunc() {
  //   alert("클릭 됨");
  // }

  // const str = "Go Naver";

  // 배열 전달하고 props 로 받기
  const nameArr = ["뽀로로", "루피", "크롱이"];
  // 객체 전달하고 props 로 받기
  const pororoObj = {
    name: "뽀로로",
    age: "5",
    nickName: "사고뭉치",
  };

  return (
    <div className="App">
      {/* 실습 - 3/28 props 와 state 활용하기 */}
      <ExPropsState />

      {/* 배열 전달하고 props 로 받기 */}
      {/* <CustomList arr={nameArr} /> */}
      {/* 객체 전달하고 props 로 받기 */}
      {/* <CustomObj obj={pororoObj} /> */}

      {/* 실습 - 3/28 배열을 map 으로 그리기 */}
      {/* <ExMap /> */}

      {/* <List /> */}

      {/* 실습 - 3/28 컴포넌트와 props 활용하기*/}
      {/* <ExList /> */}

      {/* props - 클래스형 컴포넌트 */}
      {/* <ClassProps name="뽀로로" age="5" nickName="pororo" /> */}

      {/* props - 함수형 컴포넌트 */}
      {/* <PropsHeader text="Hello, Props World!" />
      <PropsHeader text="Bye, Props World!" />
      <PropsHeader text="Welcome back, Props World!" />

      <MultiProps text={str} href="https://naver.com" userID="cielo" /> */}

      {/* 객체 타입의 성질 유의! */}
      {/* <List /> */}
      {/* <StateProblem /> */}

      {/* state 와 변수 */}
      {/* <StateAndVariable /> */}

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
