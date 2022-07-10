import { TODO_SORTING_CATEGORIES, SORT_DIRECTION } from './constants';

const {
  TODO_TITLE,
  TODO_PRIORITY,
  TODO_CREATED_AT,
  TODO_UPDATED_AT,
  TODO_IS_GOING,
  TODO_IS_COMPLETED,
  TODO_EMAIL,
  TODO_REMAIN_TIME,
} = TODO_SORTING_CATEGORIES;

const { ASC } = SORT_DIRECTION;
// const getSelectedTodos = (todos, todoSelection) => {
//   if (!todoSelection.length) {
//     return todos;
//   }

//   return todos.filter((todo) => {
//     return todoSelection.includes(todo.id);
//   });
// };

const getSearchedTodos = (todos, searchTerm) => {
  if (!searchTerm) {
    return todos;
  }
  return todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSortTodos = (todos, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return todos;
  }

  return todos.sort(function (a, b) {
    // if value is a string, we have to use sort type localeCompare
    if (sortCol === TODO_TITLE) {
      return sortDirection === ASC
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    // if value is a number, we have to use sort type a - b
    if (sortCol === TODO_PRIORITY) {
      return sortDirection === ASC
        ? a.priority - b.priority
        : b.priority - a.priority;
    }
    if (sortCol === TODO_CREATED_AT) {
      return sortDirection === ASC
        ? a.createdAt.localeCompare(b.createdAt)
        : b.createdAt.localeCompare(a.createdAt);
    }
    if (sortCol === TODO_UPDATED_AT) {
      return sortDirection === ASC
        ? a.updatedAt.localeCompare(b.updatedAt)
        : b.updatedAt.localeCompare(a.updatedAt);
    }
    // if value is a boolean, we have to use sort type a - b
    if (sortCol === TODO_IS_GOING) {
      return sortDirection === ASC
        ? a.isGoing - b.isGoing
        : b.isGoing - a.isGoing;
    }
    // if value is a boolean, we have to use sort type a - b
    if (sortCol === TODO_IS_COMPLETED) {
      return sortDirection === ASC
        ? a.isCompleted - b.isCompleted
        : b.isCompleted - a.isCompleted;
    }
    if (sortCol === TODO_EMAIL) {
      return sortDirection === ASC
        ? a.email.localeCompare(b.email)
        : b.email.localeCompare(a.email);
    }
    if (sortCol === TODO_REMAIN_TIME) {
      return sortDirection === ASC
        ? a.remainTime.localeCompare(b.remainTime)
        : b.remainTime.localeCompare(a.remainTime);
    }
    return todos;
  });
};

const getTodos = (todos, searchTerm, sortCol, sortDirection) => {
  const searchedTodos = getSearchedTodos(todos, searchTerm);
  // const selectedTodos = getSelectedTodos(searchedTodos, todoSelection);
  const sortedTodos = getSortTodos(searchedTodos, sortCol, sortDirection);
  return sortedTodos;
};

export default getTodos;
