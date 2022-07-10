import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import randomWords from 'random-words';

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
const todoData = Array.from({ length: 100 }, () => randomTodoData());

export const db = {
  todos: todoData,
};
