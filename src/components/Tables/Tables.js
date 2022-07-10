import React, { useRef, useState, useLayoutEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';

import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid';

// components
import TableTitle from './TableTitle';
import SearchBar from './SearchBar';

// Logic functions
import getTodos from '../utils/getTodos';

// constants
import {
  SORT_DIRECTION,
  TODO_SORTING_ATEGORIES,
  flipSortDirection,
} from '../utils/constants';

const tableStyles = createUseStyles({
  dataTableWrapper: {
    textAlign: 'center',
    '& th': {
      cursor: 'pointer',
      height: '30px',
      padding: '10px',
      background: 'gray',
      '& .titleWrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
      },
    },

    '& .sortingIcon': {
      height: '20px',
      width: 'auto',
      marginTop: '4px',
      marginLeft: '10px',
    },
  },
});

function Tables({ tableTitle, description, data }) {
  const checkbox = useRef();
  const classes = tableStyles({});

  const [checked, setChecked] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);

  const [sortCol, setSortCol] = useState(TODO_SORTING_ATEGORIES.TODO_TITLE);
  const [sortDirection, setSortDirection] = useState(SORT_DIRECTION.ASC);
  const [searchTerm, setSearchTerm] = useState('');

  const displayTodos = data.sort((a, b) =>
    a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 || []
  );

  const _handleSelectOneTodo = (e, todoId) => {
    if (!selectedTodos.includes(todoId)) {
      setSelectedTodos([...selectedTodos, todoId]);
    } else {
      setSelectedTodos(selectedTodos.filter((id) => id !== todoId));
    }
  };
  const _selectedAll = (e) => {
    setSelectedTodos(e.target.checked ? finalDisplayData.map((t) => t.id) : []);

    if (indeterminate) {
      setChecked(true);
      setIndeterminate(false);
    }
    if (checked) {
      setChecked(false);
      setIndeterminate(false);
    }
  };

  const _handleEditTodo = (id) => {
    console.log(id);
  };
  const _handleRemoveTodo = (id) => {
    console.log(id);
  };
  const _handleAddTodo = () => {
    console.log('add todo');
  };

  const _handleCompletedTodo = (todoId) => {
    if (!completedTodos.includes(todoId)) {
      setCompletedTodos([...completedTodos, todoId]);
    } else {
      setCompletedTodos(completedTodos.filter((id) => id !== todoId));
    }
  };

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

  const finalDisplayData = useMemo(
    () => getTodos(displayTodos, searchTerm, sortCol, sortDirection),
    [displayTodos, searchTerm, sortCol, sortDirection]
  );

  useLayoutEffect(() => {
    const completedTodos = finalDisplayData.filter((todo) => todo.isCompleted);
    const completedTodosDefault = completedTodos.map((todo) => {
      return todo.id;
    });
    setCompletedTodos(completedTodosDefault);
  }, [finalDisplayData]);

  // use Layout Effect to update the checkbox all state
  // when the selectedTodos state changes or the finalDisplayData state changes (in the case search)
  useLayoutEffect(() => {
    const isIndeterminate =
      selectedTodos.length > 0 &&
      selectedTodos.length < finalDisplayData.length;
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
    // if the selectedTodos  === finalDisplayData.length, then set checked to true
    if (selectedTodos.length === finalDisplayData.length) {
      checkbox.current.indeterminate = false;
      setChecked(true);
    } else {
      setChecked(false);
    }

    // if the selectedTodos > 0 finally, then set indeterminate to true

    if (selectedTodos.length > finalDisplayData.length) {
      checkbox.current.indeterminate = true;
      setIndeterminate(true);
    }
  }, [selectedTodos, finalDisplayData]);

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <TableTitle
        tableTitle={tableTitle}
        description={description}
        handleAddTodo={_handleAddTodo}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className={`${classes.dataTableWrapper} dataTables_wrapper `}>
        <div className='datatable-scroll'>
          <table className='table datatable-sorting dataTable w-full'>
            <thead>
              <tr>
                <th>
                  <div
                    className='titleWrapper'
                    style={{ height: '100%', paddingTop: '5px' }}
                  >
                    <input
                      type='checkbox'
                      className='left-4 top-1/2 -mt-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 sm:left-6'
                      ref={checkbox}
                      checked={checked}
                      onChange={_selectedAll}
                    />
                  </div>
                </th>
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_TITLE);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Title</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_TITLE &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>Priority</th> */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_PRIORITY);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Priority</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_PRIORITY &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>createdAt</th> */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_CREATED_AT);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Created At</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_CREATED_AT &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>Updated At</th>
                 */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_UPDATED_AT);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Updated At</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_UPDATED_AT &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>Processing</th> */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_IS_GOING);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Processing</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_IS_GOING &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>Email</th> */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_EMAIL);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Email</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_EMAIL &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>
                {/* <th>Completed</th> */}
                <th>
                  <div
                    className='titleWrapper'
                    onClick={() => {
                      setSortCol(TODO_SORTING_ATEGORIES.TODO_IS_COMPLETED);
                      setSortDirection(flipSortDirection(sortDirection));
                    }}
                  >
                    <span>Completed</span>
                    {sortCol === TODO_SORTING_ATEGORIES.TODO_IS_COMPLETED &&
                    sortDirection === SORT_DIRECTION.ASC ? (
                      <SortAscendingIcon className='sortingIcon' />
                    ) : (
                      <SortDescendingIcon className='sortingIcon' />
                    )}
                  </div>
                </th>

                <th>
                  <div className='titleWrapper'>Action</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {finalDisplayData.map((item) => {
                const isTodoSelected = selectedTodos.includes(item.id);

                const {
                  id,
                  title,
                  priority,
                  createdAt,
                  updatedAt,
                  email,
                  isGoing,
                } = item;

                return (
                  <tr
                    key={id}
                    className={`${
                      completedTodos.includes(id)
                        ? 'text-indigo-600'
                        : 'text-gray-500'
                    }`}
                  >
                    <td>
                      <input
                        type='checkbox'
                        value={id}
                        checked={isTodoSelected}
                        onChange={(e) => {
                          _handleSelectOneTodo(e, id);
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
                        onChange={() => _handleCompletedTodo(id)}
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

export default Tables;
