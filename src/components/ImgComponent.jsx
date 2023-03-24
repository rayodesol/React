import { Component } from "react";
import image from "../Jaerong.jpg";

class ImgComponent extends Component {
  render() {
    return <img src={image} alt="재롱이" width="500px" />;
  }
}

export default ImgComponent;

// // 함수형 컴포넌트
// // 주소를 자바스크립트적으로 가져옴.
// import image from "../Jaerong.jpg"; // 이미지 파일 소문자로 시작해도 상관없음!

// function ImgComponent() {
//   // 실습 - 3/24 컴포넌트 만들기
//   // console.log(image);
//   // return <img src={image} alt="재롱이" width="500px" />;

//   // public 폴더에 있는 이미지 가져오기 - import문 사용하지 않음.
//   return <img src="/logo512.png" alt="로고" width="500px" />;
// }

// export default ImgComponent;
