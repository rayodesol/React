import React from 'react';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: ${(props) => props.color};
`;

// 인자에 값이 안 들어오면 기본값으로 blue
export default function PropsStyle({ color = 'blue' }) {
  return <MyDiv color={color}>PropsStyle</MyDiv>;
}
