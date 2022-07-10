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
      tableTitle='Working with a data table'
      description='An application made by logic - reduced libraries and components with useContext, useLayoutEffect, tailwindcss. The application is made with React Hooks, and Tailwind CSS. Please play with search and check boxes. Enjoy!'
    />
  );
}

export default App;
