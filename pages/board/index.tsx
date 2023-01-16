import { useState } from "react";
import TodoList from "../../components/TodoList";
import { TodoProvider } from "../../components/TodoContext";
import TodoCreate from "../../components/TodoCreate";
import TodoTemplate from "../../components/TodoTemplate";

const Board = () => {
  const [data, setData] = useState([]);

  return (
    <TodoTemplate>
      <TodoProvider>
        <TodoList />
        <TodoCreate />
      </TodoProvider>
    </TodoTemplate>
  );
};

export default Board;
