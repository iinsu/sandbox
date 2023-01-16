import { useState } from "react";
import TodoList from "../../components/TodoList";
import { TodoProvider } from "../../components/TodoContext";
import TodoCreate from "../../components/TodoCreate";

const Board = () => {
  const [data, setData] = useState([]);

  return (
    <TodoProvider>
      <TodoList />
      <TodoCreate />
    </TodoProvider>
  );
};

export default Board;
