import React, { useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import TableTitle from './TableTitle';

const tableStyles = createUseStyles({
  dataTableWrapper: {
    textAlign: 'center',
  },
});
function Tables2({ tableTitle, description, data, contentFormat }) {
  const checkbox = useRef();
  const classes = tableStyles({});

  const [checked, setChecked] = useState(false);

  const _handleAddTodo = () => {
    console.log('add todo');
  };

  const _toggleAll = () => {
    console.log('toggle all');
  };

  const finalDisplayData = data || [];

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

  const _handleEditTodo = (id) => {
    console.log(id);
  };
  const _handleRemoveTodo = (id) => {
    console.log(id);
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <TableTitle
        tableTitle={tableTitle}
        description={description}
        handleAddTodo={_handleAddTodo}
      />
      <div className={`${classes.dataTableWrapper} dataTables_wrapper `}>
        <div className='datatable-scroll'>
          <table className='table datatable-sorting dataTable w-full'>
            <thead>
              <tr>
                <th>
                  <input
                    type='checkbox'
                    className='left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6'
                    ref={checkbox}
                    checked={checked}
                    onChange={_toggleAll}
                  />
                </th>
                <th>Title</th>
                <th>Priority</th>
                <th>createdAt</th>
                <th>Updated At</th>
                <th>Processing</th>
                <th>Email</th>
                <th>Completed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {finalDisplayData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        type='checkbox'
                        value={item.id}
                        // checked =
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{showPriority(item.priority)}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                    <td>{item.email}</td>
                    <td>{item.isGoing ? 'Yes' : 'No'}</td>
                    <td>
                      <input
                        type='checkbox'
                        value={item.id}
                        // checked =
                      />
                    </td>
                    <td>
                      <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto mr-2'
                        onClick={() => _handleEditTodo(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
                        onClick={() => _handleRemoveTodo(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tables2;
