import React, { useEffect, useState } from 'react';
import ProfileComponent from './components/ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      methode: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* map 함수에 중괄호를 썼으면 return 꼭 써줘야! */}
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </>
  );
}
