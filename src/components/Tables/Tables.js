import React, { useState, useLayoutEffect, useMemo } from 'react';
import { createUseStyles } from 'react-jss';

// components
import TableTitle from './TableTitle';
import SearchBar from './SearchBar';
import TableHeader from './TableHeader';
import Row from './Row';
import Pagination from '../Pagination';

// Logic functions
import getTodos from '../utils/getTodos';

import usePaginationParams from '../../hook/usePagination';

// constants
import {
  SORT_DIRECTION,
  TODO_SORTING_CATEGORIES,
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

function Tables({ tableTitle, description, data, deleteTodo }) {
  const checkbox = React.createRef();
  const classes = tableStyles({});

  const [checked, setChecked] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);

  const [sortCol, setSortCol] = useState(TODO_SORTING_CATEGORIES.TODO_TITLE);

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

  const _handleDeleteTodo = (id) => {
    deleteTodo(id);
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
  }, [selectedTodos, finalDisplayData, checkbox]);
  function _handleChangeSort(col) {
    setSortCol(col);
    setSortDirection(flipSortDirection(sortDirection));
  }

  const {
    currentPage,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    setCurrentPage,
    setRowsPerPage,
  } = usePaginationParams(finalDisplayData?.length);

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
              <TableHeader
                ref={checkbox}
                checkedAll={checked}
                onChangeCheckedAll={_selectedAll}
                handleChangeSort={_handleChangeSort}
                TODO_SORTING_CATEGORIES={TODO_SORTING_CATEGORIES}
                SORT_DIRECTION={SORT_DIRECTION}
                sortCol={sortCol}
                sortDirection={sortDirection}
              />
            </thead>
            <tbody>
              {finalDisplayData
                ?.slice(
                  (currentPage - 1) * rowsPerPage,
                  currentPage * rowsPerPage
                )
                .map((item) => {
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
                    <Row
                      key={id}
                      id={id}
                      title={title}
                      priority={priority}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                      email={email}
                      isGoing={isGoing}
                      completedTodos={completedTodos}
                      isTodoSelected={isTodoSelected}
                      handleSelectOneTodo={_handleSelectOneTodo}
                      handleDeleteTodo={_handleDeleteTodo}
                      handleCompletedTodo={_handleCompletedTodo}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
        <Pagination
          totalItems={finalDisplayData?.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </div>
  );
}

export default Tables;
