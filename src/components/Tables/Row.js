import React from 'react';

function showPriority(priority) {
  switch (priority) {
    case 0:
      return 'High';
    case 1:
      return 'Medium';
    case 2:
      return 'Low';
    default:
      return 'Unknown';
  }
}
function Row({
  completedTodos,
  id,
  isTodoSelected,
  handleSelectOneTodo,
  handleCompletedTodo,
  title,
  priority,
  createdAt,
  updatedAt,
  isGoing,
  email,
  handleDeleteTodo,
}) {
  return (
    <tr
      className={`${
        completedTodos.includes(id) ? 'text-indigo-600' : 'text-gray-500'
      }`}
    >
      <td>
        <input
          type='checkbox'
          value={id}
          checked={isTodoSelected}
          onChange={(e) => {
            handleSelectOneTodo(e, id);
          }}
        />
      </td>
      <td>{title}</td>
      <td>{showPriority(priority)}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>{isGoing ? 'Yes' : 'No'}</td>
      <td>{email}</td>
      {/* isCompleted */}
      <td>
        <input
          type='checkbox'
          value={id}
          // defaultChecked={completedTodos.includes(id)}
          checked={completedTodos.includes(id)}
          onChange={() => handleCompletedTodo(id)}
        />
      </td>
      <td>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
          onClick={() => handleDeleteTodo(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Row;
