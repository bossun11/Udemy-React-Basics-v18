import { useState } from "react";
import TaskList from "./components/TaskList";

export type Todo = {
  id: number;
  text: string;
};

const initTodoList = [
  { id: 1, text: "Todo" },
  { id: 2, text: "Todo2" },
];

const Example = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodoList);
  const [inputText, setInputText] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodoItem = () => {
    setTodos((state) => [...state, { id: state.length + 1, text: inputText }]);
    setInputText("");
  };

  return (
    <>
      <input value={inputText} onChange={changeHandler} />
      <button onClick={addTodoItem}>追加</button>
      <TaskList todos={todos} />
    </>
  );
};

export default Example;
