import React, { forwardRef } from 'react';
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid';

const TableHeader = forwardRef(
  (
    {
      checkedAll,
      onChangeCheckedAll,
      handleChangeSort,
      TODO_SORTING_CATEGORIES,
      SORT_DIRECTION,
      sortCol,
      sortDirection,
    },
    ref
  ) => (
    <tr>
      <th>
        <div
          className='titleWrapper'
          style={{ height: '100%', paddingTop: '5px' }}
        >
          <input
            type='checkbox'
            className='left-4 top-1/2 -mt-2 h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500 sm:left-6'
            ref={ref}
            checked={checkedAll}
            onChange={onChangeCheckedAll}
          />
        </div>
      </th>
      <th>
        <div
          className='titleWrapper'
          onClick={() => handleChangeSort(TODO_SORTING_CATEGORIES.TODO_TITLE)}
        >
          <span>Title</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_TITLE &&
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
          onClick={() =>
            handleChangeSort(TODO_SORTING_CATEGORIES.TODO_PRIORITY)
          }
        >
          <span>Priority</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_PRIORITY &&
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
          onClick={() =>
            handleChangeSort(TODO_SORTING_CATEGORIES.TODO_CREATED_AT)
          }
        >
          <span>Created At</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_CREATED_AT &&
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
          onClick={() =>
            handleChangeSort(TODO_SORTING_CATEGORIES.TODO_UPDATED_AT)
          }
        >
          <span>Updated At</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_UPDATED_AT &&
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
          onClick={() =>
            handleChangeSort(TODO_SORTING_CATEGORIES.TODO_IS_GOING)
          }
        >
          <span>Processing</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_IS_GOING &&
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
          onClick={() => handleChangeSort(TODO_SORTING_CATEGORIES.TODO_EMAIL)}
        >
          <span>Email</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_EMAIL &&
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
          onClick={() =>
            handleChangeSort(TODO_SORTING_CATEGORIES.TODO_IS_COMPLETED)
          }
        >
          <span>Completed</span>
          {sortCol === TODO_SORTING_CATEGORIES.TODO_IS_COMPLETED &&
          sortDirection === SORT_DIRECTION.ASC ? (
            <SortAscendingIcon className='sortingIcon' />
          ) : (
            <SortDescendingIcon className='sortingIcon' />
          )}
        </div>
      </th>

      <th>
        <div className='titleWrapper'>Actions</div>
      </th>
    </tr>
  )
);
export default TableHeader;
