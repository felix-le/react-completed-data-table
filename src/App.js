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

  // function contentFormat(type, value, showText) {
  //   console.log('🚀 ~ file: App.js ~ line 37 ~ contentFormat ~ type', type);
  //   // console.log('🚀 ~ file: App.js ~ line 37 ~ contentFormat ~ type', type);
  //   switch (type) {
  //     case 'completed':
  //       return value === false ? 'No' : 'Yes';
  //     default:
  //       return value;
  //   }
  // }

  return <Tables data={todos} headers={headers} description='todo list' />;
}

export default App;
