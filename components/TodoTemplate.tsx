import styled from "styled-components";

const TodoTemplateBlock = styled.div``;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
