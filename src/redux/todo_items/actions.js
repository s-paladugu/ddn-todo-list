export const SET_TODO_ITEM = "SET_TODO_ITEM";
export const TOGGLE_TODO_ITEM = "TOGGLE_TODO_ITEM";

export const setTodoItem = (todoItem) => {
  return {
    type: SET_TODO_ITEM,
    todoItem: todoItem,
  };
};

export const toggleTodoItem = (id) => {
  return {
    type: TOGGLE_TODO_ITEM,
    id,
  };
};
