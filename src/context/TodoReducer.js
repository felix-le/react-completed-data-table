import {
  READ_TODOS,
  // ADD_TODO,
  // UPDATE_TODO,
  DELETE_TODO,
  // COMPLETE_TODO,
} from './actions';

const TodoReducer = (state, action) => {
  switch (action.type) {
    case READ_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
export default TodoReducer;
