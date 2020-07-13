import React, {useState} from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoItemName = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export default (props) => {
  return (
    <TodoItemContainer>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onToggleChecked(props.id)}
      />
      <TodoItemName checked={props.checked}>{props.name}</TodoItemName>
    </TodoItemContainer>
  );
};
