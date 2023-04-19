import React from 'react'; // JSX 문법을 사용하는 곳에 넣기
import { createGlobalStyle } from 'styled-components';

// 이건 컴포넌트가 아님.
// 변수 하나를 빼는 것.
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Pacifico', cursive;
  }
`;

export default GlobalStyle;
