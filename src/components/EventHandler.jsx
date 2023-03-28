function EventHandler() {
  function alertFunc() {
    alert("클릭 됨");
  }

  // 익명함수 만들어 전달. JS 이기에 바로 익명함수를 정의해서 전달.
  return (
    // 함수가 나오고 ()가 나오면 바로 실행됨.
    // 의도대로 하려면, 익명함수 안에 정의 후 사용해야.
    // alert함수를 익명함수로 만들지 않고 바로 넣으면 클릭 안해도 그냥 alert창이 뜸.
    // <span onClick={alert("클릭 됨!")}>클릭!</span>

    // 방법 1
    // <span
    //   onClick={() => {
    //     alert("클릭 됨!");
    //   }}
    // >
    //   클릭!
    // </span>

    <div>
      {/* 방법 2 */}
      {/* 익명함수로 쓰는 것이 정석 */}
      {/* 방법 2-1 */}
      <span
        onClick={() => {
          alertFunc();
        }}
      >
        클릭!
      </span>
      <br />

      {/* 방법 2-2 */}
      <span onClick={alertFunc}>클릭!</span>
      <br />

      {/* 클릭하면 숫자 계산 결과 콘솔 창에 출력 */}
      <span
        onClick={() => {
          let num = 10;
          num += 5;
          console.log(num);
        }}
      >
        숫자 계산
      </span>
    </div>
  );
}

export default EventHandler;
