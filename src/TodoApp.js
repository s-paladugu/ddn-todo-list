import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setTodoItem, toggleTodoItem} from "./redux/todo_items/actions";

import TodoItem from "./components/TodoItem";

/*
  {
    id: adfgsdfg,
    name: "TODO Item",
    checked: false,
  }
*/

const TODO_ITEMS_KEY = "todo-items";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const createTodoItem = (name) => {
  return {
    id: uuidv4(),
    name: name,
    checked: false,
  };
};

const TodoApp = () => {
  const [newTodoName, setNewTodoName] = useState("");
  // const [todoItems, setTodoItems] = useState([]);

  const todoItems = useSelector((state) => state.todoItems.byId);
  const dispatch = useDispatch();

  const handleCreateTodo = () => {
    dispatch(setTodoItem(createTodoItem(newTodoName)));
  };

  const handleToggleChecked = (id) => {
    dispatch(toggleTodoItem(id));
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
      {Object.keys(todoItems).map((itemId) => {
        const item = todoItems[itemId];
        return (
          <TodoItem
            id={item.id}
            name={item.name}
            checked={item.checked}
            onToggleChecked={handleToggleChecked}
          />
        );
      })}
    </div>
  );
};

export default TodoApp;
