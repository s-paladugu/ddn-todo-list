import React, {useState} from "react";
import styled from "styled-components";

// const Container = styled.div``;

// const TodoInput = styled.input``;

// const TodoButton = styled.button``;

// const TodoItem = styled.div`
//   background: red;
// `;

const TodoApp = () => {
  const [newTodoName, setNewTodoName] = useState("");
  const [todoItems, setTodoItems] = useState(["Item 1", "Item 2"]);

  const handleCreateTodo = () => {
    setTodoItems([...todoItems, newTodoName]);
  };

  return (
    <div>
      <input
        type="text"
        value={newTodoName}
        onChange={(event) => setNewTodoName(event.target.value)}
      />
      <button onClick={handleCreateTodo}>Create Todo</button>

      <h3>Todo Items</h3>
      {todoItems.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default TodoApp;
