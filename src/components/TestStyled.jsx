import React from 'react';
import styled from 'styled-components'; // styled 라고 이름 붙이는 게 국룰

// 스타일링
// `` 이 CSS 의 중괄호
const MyDiv = styled.div`
  background-color: orange;
`;

const MyHeading = styled.h1`
  color: blue;
`;

const MySpan = styled.span`
  background-color: pink;
  font-weight: 700;
`;

export default function TestStyled() {
  return (
    <MyDiv>
      <MyHeading>h1 태그 입니다</MyHeading>
      <MySpan>span 태그 입니다</MySpan>
    </MyDiv>
  );
}
