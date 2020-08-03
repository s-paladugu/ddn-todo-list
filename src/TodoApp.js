import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  setTodoItem,
  toggleTodoItem,
  getTodos,
  createTodo,
  updateTodo,
} from "./redux/todo_items/actions";

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

const createTodoItem = (text) => {
  return {
    id: uuidv4(),
    text: text,
    state: "incomplete",
  };
};

const TodoApp = () => {
  const [newTodoName, setNewTodoName] = useState("");
  // const [todoItems, setTodoItems] = useState([]);

  const todoItems = useSelector((state) => state.todoItems.byId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleCreateTodo = () => {
    dispatch(createTodo(createTodoItem(newTodoName)));
  };

  const handleToggleChecked = (id) => {
    dispatch(toggleTodoItem(id));
  };

  const handleUpdate = (id, todoName) => {
    const todoItem = todoItems[id];
    dispatch(
      setTodoItem({
        ...todoItem,
        text: todoName,
      })
    );
  };

  const handleUpdate2 = (id, todoName) => {
    const todoItem = todoItems[id];
    dispatch(updateTodo({...todoItem, text : todoName}));
    //console.log({...todoItem, text : todoName});
    //console.log(todoItem);
    //dispatch(createTodo(createTodoItem({...todoItem, text : todoName})));
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
            text={item.text}
            checked={item.checked}
            onToggleChecked={handleToggleChecked}
            onUpdate={handleUpdate2}
          />
        );
      })}
    </div>
  );
};

export default TodoApp;
