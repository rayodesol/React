import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요!');

  const inputValue = useRef();

  // // 이벤트 객체를 받음
  // const onChangeText = (e) => {
  //   const inputText = e.target.value; // 이벤트 발생할 때마다 함수 실행되므로 let 으로 선언 안해도 됨.
  //   setText(inputText);
  // };

  // useRef 로 값을 변경하는 함수
  const onChangeRef = () => {
    console.log(inputValue);

    // input 태그의 변화를 감지하므로 이벤트 객체 필요 없음.
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>

      {/* onChange ; 해당 dom 요소가 변화되면 처리 */}
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
