import React, { useContext } from 'react';
import { GlobalContext } from './context/contextProvider';

import Tables from './components/Tables';

function App() {
  const context = useContext(GlobalContext);
  const { todos, deleteTodo } = context;
  return (
    <Tables
      data={todos}
      deleteTodo={deleteTodo}
      tableTitle='Todo List'
      description='An application made by logic - reduced libraries and components with useContext, useLayoutEffect, tailwindcss  '
    />
  );
}

export default App;
