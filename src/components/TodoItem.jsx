import React, {useState, useEffect} from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoItemName = styled.div`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

export default (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    setTodoName(props.text);
  }, [props.text]);

  return (
    <TodoItemContainer>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={() => props.onToggleChecked(props.id)}
      />
      {isEditing ? (
        <input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
      ) : (
        <TodoItemName checked={props.checked}>{props.text}</TodoItemName>
      )}
      {isEditing ? (
        <button
          onClick={() => {
            setIsEditing(false);
            props.onUpdate(props.id, todoName);
          }}
        >
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </TodoItemContainer>
  );
};
