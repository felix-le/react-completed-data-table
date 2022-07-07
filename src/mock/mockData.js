import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
export const db = {
  todos: [
    {
      id: uuidv4(),
      title: 'Learn React',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),

      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      isGoing: true,
      priority: Math.floor(Math.random() * 3),
      email: 'hahaaha@gmail1.com',
    },
    {
      id: uuidv4(),
      title: 'Learn algorithms',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),

      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      isGoing: true,

      priority: Math.floor(Math.random() * 3),
      email: 'hahaaha@gmail2.com',
    },
    {
      id: uuidv4(),
      title: 'Learn system design',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
      email: '7hahaaha@gmail2.com',
    },
    {
      id: uuidv4(),
      title: 'Learn React Native',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
      email: 'hahaaha@gmail3.com',
    },
    {
      id: uuidv4(),
      title: 'Learn security',
      completed: true,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
      email: 'hahaaha@gmail4.com',
    },
    {
      id: uuidv4(),
      title: 'Go to fishing',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
      email: '8hahaaha@gmail4.com',
    },
    {
      id: uuidv4(),
      title: 'fly to Japan',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
      email: 'hahaaha@gmail5.com',
    },
    {
      id: uuidv4(),
      title: 'workout',
      completed: false,
      // createdAt: random days ago format is 'DD/MM/YYYY'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('DD/MM/YYYY'),
      priority: Math.floor(Math.random() * 3),
      isGoing: true,
      email: 'h6ahaaha@gmail5.com',
    },
  ],
};
