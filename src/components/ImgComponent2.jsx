import React from 'react';
import dogImg from '../images/jaerong.jpg';

export default function ImgComponent2() {
  return (
    <>
      <h1>퍼블릭 폴더에서 사진 가져오기</h1>
      <img src="/images/jaerong.jpg" alt="퍼블릭 재롱이" />
      <h1>SRC 폴더에서 사진 가져오기</h1>
      <img src={dogImg} alt="소스 재롱이" />
    </>
  );
}
