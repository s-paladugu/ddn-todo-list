import {combineReducers} from "redux";
import todoItemsReducer from "./todo_items/reducer";

const rootReducer = combineReducers({
  todoItems: todoItemsReducer,
});

export default rootReducer;
