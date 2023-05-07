import { useState } from "react"
import List from "./List"
import Form from "./Form"
import { StackDivider, VStack } from "@chakra-ui/react";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [ todos, setTodos ] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <VStack divider={<StackDivider />}
      // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600' }}
      borderColor='black.100'
      borderWidth='1px'
      borderRadius='3px'
      p={5}
      alignItems='start'
    >
      <h2>Reminder</h2>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </VStack>
  )
};
export default Todo;
