const Example = () => {
  // 練習用

  // voidは関数が何も返さない時に使う。returnで値を返すとエラーになる。
  function sum1(x: number, y: number): void {
    console.log(y);
    // return x + y;
  }

  const result1 = sum1(1, 2);

  // 関数の引数だけでなく、戻り値にも型を定義できる。
  const sum2 = (x: number, y: number): string => "Hello";
  const result2 = sum2(10, 20);
  console.log(result2);

  // 以下のような型定義は分かりづらいので、一般的には使わない。
  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(100, 200);
  console.log(result3);
};

export default Example;
