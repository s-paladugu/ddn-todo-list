import React, {useState, useEffect} from "react";
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
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    if (todoItems.length > 0) {
      localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(todoItems));
    }
  }, [todoItems]);

  useEffect(() => {
    const fetchedTodoItems = localStorage.getItem(TODO_ITEMS_KEY);
    setTodoItems(JSON.parse(fetchedTodoItems) || []);
  }, []);

  const handleCreateTodo = () => {
    setTodoItems([...todoItems, createTodoItem(newTodoName)]);
  };

  const handleToggleChecked = (id) => {
    const updatedTodoItems = todoItems.map((item) => {
      if (item.id !== id) {
        return item;
      }

      return {
        ...item,
        checked: !item.checked,
      };
    });

    setTodoItems(updatedTodoItems);
  };

  console.log(todoItems);

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
