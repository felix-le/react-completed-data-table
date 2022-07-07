import React from 'react';

function TableTitle({ tableTitle, description, handleAddTodo }) {
  return (
    <div className='sm:flex sm:items-center'>
      <div className='sm:flex-auto'>
        <h1 className='text-xl font-semibold text-gray-900'>{tableTitle}</h1>
        <p className='mt-2 text-sm text-gray-700'>{description}</p>
      </div>
      <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
          onClick={handleAddTodo}
        >
          Add todo
        </button>
      </div>
    </div>
  );
}

export default TableTitle;
