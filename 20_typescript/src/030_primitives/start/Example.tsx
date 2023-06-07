const Example = () => {
  // 練習用
  let str: string = "Hello";
  str = "World";
  console.log(str);

  let num: number = 10;
  console.log(num);

  let bigNum: bigint = 1000n;
  console.log(bigNum);

  let bool: boolean = false;
  console.log(bool);

  let nullish: null = null;
  let undefinedValue: undefined = undefined;

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
  let hello: "Hello" = "Hello";

  //以下はエラーになる
  // let trueVal: true = false;
  // let num123: 123 = 456;
  // let hello: "Hello" = "World";
};

export default Example;
