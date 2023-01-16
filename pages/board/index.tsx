import TodoList from "../../components/TodoList";
import { TodoProvider } from "../../components/TodoContext";
import TodoCreate from "../../components/TodoCreate";
import TodoTemplate from "../../components/TodoTemplate";
import TodoHead from "../../components/TodoHead";

const Board = () => {
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
