# [Live Link](https://gentle-narwhal-9f9ac7.netlify.app/)

# Overview

**An application made by logical - reduced libraries and components.**

- A todo list with useContext, tailwindcss, and jss
- Filter component + checkbox + search - done
- Pagination component - working
- unit tests - on going

- Sort by columns

- **Mock data**

```js
function randomTodoData() {
  const createAt = dayjs()
    .subtract(Math.floor(Math.random() * 100), 'day')
    .format('MMM/DD/YYYY');
  const updateAt = dayjs()
    .subtract(Math.floor(Math.random() * 10), 'day')
    .format('MMM/DD/YYYY');
  const newTodo = {
    id: uuidv4(),
    title: `${randomWords(5).join(' ')} `,
    isCompleted: !!Math.floor(Math.random() * 2),
    // createdAt: random days ago format is 'DD/MM/YYYY'
    createdAt: createAt,
    updatedAt: updateAt,
    isGoing: !!Math.floor(Math.random() * 2),
    priority: Math.floor(Math.random() * 3),
    email: `${randomWords(2).join('')}@gmail1.com`,
    // remain time = from now - createdAt
    remainTime: dayjs().diff(dayjs(createAt), 'day'),
  };
  return newTodo;
}
// Change the number for the number of todos you want to generate
const todoData = Array.from({ length: 10 }, () => randomTodoData());

export const db = {
  todos: todoData,
};
```

# Next version

1. use TypeScript
2. use Redux
3. material ui
4. axios-mock-adapter
