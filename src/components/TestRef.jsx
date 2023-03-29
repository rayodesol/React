import { useRef, useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요!'); // JS 방식
  const [textRef, setTextRef] = useState('안녕하세요!'); // useRef

  const inputValue = useRef();

  // 이벤트 객체를 받음
  const onChangeText = (e) => {
    const inputText = e.target.value; // 이벤트 발생할 때마다 함수 실행되므로 let 으로 선언 안해도 됨.
    setText(inputText);
  };

  // useRef 로 값을 변경하는 함수
  const onChangeRef = () => {
    console.log(inputValue);

    // input 태그의 변화를 감지하므로 이벤트 객체 필요 없음.
    setTextRef(inputValue.current.value);
  };

  return (
    <div>
      <h1>useRef 사용</h1>
      <h1>{textRef}</h1>

      {/* onChange ; 해당 dom 요소가 변화되면 처리 */}
      <input ref={inputValue} onChange={onChangeRef} />

      <hr />

      <h1>JS 방식 - useState 사용</h1>
      <h1>{text}</h1>

      <input
        onChange={(e) => {
          onChangeText(e);
        }}
      />
    </div>
  );
}

// // 개인 연습
// import { useRef, useState } from 'react';

// export default function TestRef() {
//   const [text, setText] = useState('JS 방식'); // JS 방식
//   const [textRef, setTextRef] = useState('useRef 사용'); // useRef

//   const inputValue = useRef();

//   return (
//     <div>
//       <h1>useRef 사용</h1>
//       <h2>{textRef}</h2>

//       <input
//         ref={inputValue}
//         onChange={() => setTextRef(inputValue.current.value)}
//       />

//       <hr />

//       <h1>JS 방식 - useState 사용</h1>
//       <h2>{text}</h2>

//       <input onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }
