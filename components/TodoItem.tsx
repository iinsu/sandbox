import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "./TodoContext";

const Remove = styled.div``;
const TodoItemBlock = styled.div``;
const CheckCircle = styled.div``;
const Text = styled.div``;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
