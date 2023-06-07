const Example = () => {
  // 練習用
  // 配列の型定義
  const arr1: number[] = [0, 1, 2];
  const arr2: string[] = ["Hello", "Bye"];
  const arr3: Array<number> = [0, 1, 2];
  const arr4: (string | number)[] = ["Hello", 1, 2];
  const arr5: Array<string | number> = ["Hello", 1, 2];

  // オブジェクトの型定義
  type Person = { name: string; age?: number };
  const obj1: Person = { name: "Jack", age: 21 };
  // const obj1: { name: string; age: number } = { name: "Jack", age: 21 };

  // 配列の中にオブジェクトが入っている場合の型定義
  const users: Person[] = [
    { name: "Taro", age: 18 },
    { name: "Jon" },
    { name: "Mike", age: 15 },
  ];
};

export default Example;
