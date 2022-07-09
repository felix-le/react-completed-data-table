import { TODO_SORTING_ATEGORIES, SORT_DIRECTION } from './constants';

const {
  TODO_TITLE,
  TODO_PRIORITY,
  TODO_CREATED_AT,
  TODO_UPDATED_AT,
  TODO_IS_GOING,
  TODO_IS_COMPLETED,
  TODO_EMAIL,
  TODO_REMAIN_TIME,
} = TODO_SORTING_ATEGORIES;

const { ASC } = SORT_DIRECTION;

const getSearchedTodos = (todos, searchTerm) => {
  if (!searchTerm) {
    return todos;
  }
  return todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const getSelectedTodos = (todos, todoSelection) => {
  if (!todoSelection.length) {
    return todos;
  }

  return todos.filter((todo) => {
    return todoSelection.includes(todo.id);
  });
};

const getSortTodos = (todos, sortCol, sortDirection) => {
  if (!sortCol || !sortDirection) {
    return todos;
  }

  return todos.sort((a, b) => {
    if (sortCol === TODO_TITLE) {
      return sortDirection === ASC ? a.title - b.title : b.title - a.title;
    }
    if (sortCol === TODO_PRIORITY) {
      return sortDirection === ASC
        ? a.priority - b.priority
        : b.priority - a.priority;
    }
    if (sortCol === TODO_CREATED_AT) {
      return sortDirection === ASC
        ? a.createdAt - b.createdAt
        : b.createdAt - a.createdAt;
    }
    if (sortCol === TODO_UPDATED_AT) {
      return sortDirection === ASC
        ? a.updatedAt - b.updatedAt
        : b.updatedAt - a.updatedAt;
    }
    if (sortCol === TODO_IS_GOING) {
      return sortDirection === ASC
        ? a.isGoing - b.isGoing
        : b.isGoing - a.isGoing;
    }
    if (sortCol === TODO_IS_COMPLETED) {
      return sortDirection === ASC
        ? a.isCompleted - b.isCompleted
        : b.isCompleted - a.isCompleted;
    }
    if (sortCol === TODO_EMAIL) {
      return sortDirection === ASC ? a.email - b.email : b.email - a.email;
    }
    if (sortCol === TODO_REMAIN_TIME) {
      return sortDirection === ASC
        ? a.remainTime - b.remainTime
        : b.remainTime - a.remainTime;
    }
  });
};

const getTodos = (todos, searchTerm, sortCol, sortDirection) => {
  const searchedTodos = getSearchedTodos(todos, searchTerm);
  // const selectedTodos = getSelectedTodos(searchedTodos, todoSelection);
  const sortedTodos = getSortTodos(searchedTodos, sortCol, sortDirection);
  return sortedTodos;
};

export default getTodos;
