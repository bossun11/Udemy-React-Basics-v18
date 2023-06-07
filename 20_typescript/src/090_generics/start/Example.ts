const Example = () => {
  // 練習用
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };

  // ジェネリクス
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };

  const strArray = repeat<string>("Hello", 3);
  const numArray = repeat<number>(10, 3);
  console.log(strArray);

  // const strArray = repeatStr("Hello", 3);
  // const numArray = repeatNum(10, 3);
  // console.log(strArray);
};

export default Example;
