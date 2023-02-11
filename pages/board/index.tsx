import TodoList from "../../components/ToDoList/TodoList";
import { TodoProvider } from "../../components/ToDoList/TodoContext";
import TodoCreate from "../../components/ToDoList/TodoCreate";
import TodoTemplate from "../../components/ToDoList/TodoTemplate";
import TodoHead from "../../components/ToDoList/TodoHead";

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
