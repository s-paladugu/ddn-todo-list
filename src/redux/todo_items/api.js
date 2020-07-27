import {BASE_URL, doRequest} from "../api";

export function getTodos() {
  return doRequest("GET", BASE_URL + "todos");
}

export function createTodo(todoItem) {
  return doRequest("POST", BASE_URL + "todos", todoItem);
}
