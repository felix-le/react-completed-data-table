import React from 'react';

function TableTitle({ tableTitle, description, handleAddTodo }) {
  return (
    <div className='sm:flex sm:items-center'>
      <div className='sm:flex-auto'>
        <h1 className='text-xl font-semibold text-gray-900'>{tableTitle}</h1>
        <p className='mt-2 text-sm text-gray-700'>{description}</p>
      </div>
    </div>
  );
}

export default TableTitle;
