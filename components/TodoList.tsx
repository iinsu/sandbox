import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

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
