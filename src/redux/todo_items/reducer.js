import {SET_TODO_ITEM, TOGGLE_TODO_ITEM} from "./actions";

const initialState = {
  byId: {},
};

const todoItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_ITEM:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.todoItem.id]: action.todoItem,
        },
      }; 
    case TOGGLE_TODO_ITEM:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: {
            ...state.byId[action.id],
            checked: !state.byId[action.id].checked,
          },
        },
      };
    default:
      return state;
  }
};

export default todoItemReducer;
