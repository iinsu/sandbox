import { useState } from "react";
import TodoList from "../../components/TodoList";
import { TodoProvider } from "../../components/TodoContext";
import TodoCreate from "../../components/TodoCreate";
import TodoTemplate from "../../components/TodoTemplate";
import TodoHead from "../../components/TodoHead";

const Board = () => {
  const [data, setData] = useState([]);

  return (
    <TodoTemplate>
      <TodoProvider>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoProvider>
    </TodoTemplate>
  );
};

export default Board;
