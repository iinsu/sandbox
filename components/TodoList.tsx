import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";
import styled from "styled-components";

const TodoListBlock = styled.div``;

const TodoList = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          key={todo.id}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
