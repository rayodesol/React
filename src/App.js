// import logo from "./logo.svg";
import "./App.css";

import MainHeader from "./components/MainHeader"; // mainHeader 만 쳐도 자동 완성됨.

// 실습 - 3/24 컴포넌트 만들기
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      {/* 컴포넌트는 이 div 태그 사이에 넣으면 됨!! */}

      {/* 태그 1개 단독으로 쓸 때는 <... /> 로 닫아주는 것이 좋음 */}
      {/* <MainHeader /> */}

      {/* 실습 - 3/24 컴포넌트 만들기 */}
      <h1>클래스형 컴포넌트 - ImgComponent 컴포넌트</h1>
      <ImgComponent />
      <h1>클래스형 컴포넌트 - BtnToNaver 컴포넌트</h1>
      <BtnToNaver />

      {/* <ClassComponent />
      <FunctionalComponent /> */}
    </div>
  );
}

export default App;
