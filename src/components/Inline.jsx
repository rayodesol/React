function Inline() {
  const styleObj = { fontSize: "32px", backgroundColor: "orange" };

  // 카멜 케이스로 적어야. 값은 문자열로.
  return <div style={styleObj}>Test TEXT</div>;
}

export default Inline;
