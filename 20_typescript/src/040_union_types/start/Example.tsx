const Example = () => {
  // 練習用
  let strOrNum: string | number = "Hello";
  strOrNum = 1000;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = "Hello";
  strOrNumOrBool = false;
  console.log(strOrNumOrBool);

  type HelloOrNum = string | number;
  const hello: HelloOrNum = "Hello";

  type DayOfWeek = "Monday" | "Tuesday";
  const day: DayOfWeek = "Monday";
};

export default Example;
