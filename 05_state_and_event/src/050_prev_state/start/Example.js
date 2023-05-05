import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  // カウントアップの関数
  const countUp = () => {
    setCount(count + 1);
    setCount(prevstate => prevstate + 1);
  };

  // カウントダウンの関数
  const countDown = () => {
    if(count === 0) return;
    setCount(count - 1);
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  )
};

export default Example;
