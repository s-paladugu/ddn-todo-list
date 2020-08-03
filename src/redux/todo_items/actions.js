import * as api from "./api";

export const SET_TODO_ITEM = "SET_TODO_ITEM";
export const TOGGLE_TODO_ITEM = "TOGGLE_TODO_ITEM";
export const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";


export const setTodoItem = (todoItem) => {
  return {
    type: SET_TODO_ITEM,
    todoItem: todoItem,
  };
};

// export const updateTodoItem = (todoItem) => {
//   return {
//     type: UPDATE_TODO_ITEM,
//     todoItem: todoItem,
//   };
// }

export const toggleTodoItem = (id) => {
  return {
    type: TOGGLE_TODO_ITEM,
    id,
  };
};

export const getTodos = () => {
  return (dispatch) => {
    return api.getTodos().then((response) => {
      if (response.status === "ok") {
        response.todos.map((todoItem) => {
          dispatch(setTodoItem(todoItem));
        });
      }
      console.log(response);
    });
  };
};

export const updateTodo = (todoItem) => {
  return (dispatch) => {
    return api.updateTodo(todoItem).then((response) => {
        if (response.status === "ok") {
            dispatch(setTodoItem(response.todo_item));
        }
        console.log(response);
    });
  };
};

export const createTodo = (todoItem) => {
  return (dispatch) => {
    return api.createTodo(todoItem).then((response) => {
      if (response.status === "ok") {
        dispatch(setTodoItem(response.todo_item));
      }
      console.log(response);
    });
  };
};
