import React, { useContext } from 'react';
import { GlobalContext } from './context/contextProvider';

import Tables from './components/Tables';

const headers = [
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: 'completed',
    label: 'Completed',
  },
  {
    key: 'priority',
    label: 'Priority',
  },
  {
    key: 'createdAt',
    label: 'Created At',
  },
  {
    key: 'updatedAt',
    label: 'Updated At',
  },
  { key: 'email', label: 'Email' },
  { key: 'isGoing', label: 'Is On Going' },
  { key: 'actions', label: 'Actions' },
];

function App() {
  const context = useContext(GlobalContext);
  const { todos } = context;

  return <Tables data={todos} headers={headers} description='todo list' />;
}

export default App;
