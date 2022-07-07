import { createContext, useReducer, useState, useEffect } from 'react';

import { getTodos } from '../api/mock';

import TodoReducer from './TodoReducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(TodoReducer, { todos: [] });

  async function _getTodos() {
    const res = await getTodos();
    dispatch({
      type: 'READ_TODOS',
      payload: res.data,
    });
  }

  useEffect(() => {
    _getTodos();
  }, []);

  const value = {
    todos: state.todos,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
