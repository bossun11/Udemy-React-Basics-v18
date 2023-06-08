import { useState } from "react";

type User = {
  name: string;
  age: number;
};

type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [text, setText] = useState("initial value");
  useState(0);

  const [animals, setAnimals] = useState<string[]>(["dog", "cat"]);
  const [user, setUser] = useState<User[]>([{ name: "John", age: 20 }]);
  const [todo, setTodo] = useState<Todo[]>([{ id: 1, text: "hello" }]);
};

export default Example;
