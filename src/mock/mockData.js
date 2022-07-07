import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
export const db = {
  todos: [
    {
      id: uuidv4(),
      title: 'Learn React',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),

      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      isGoing: true,
      priority: Math.floor(Math.random() * 3),
    },
    {
      id: uuidv4(),
      title: 'Learn algorithms',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),

      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      isGoing: true,

      priority: Math.floor(Math.random() * 3),
    },
    {
      id: uuidv4(),
      title: 'Learn system design',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
    },
    {
      id: uuidv4(),
      title: 'Learn React Native',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
    },
    {
      id: uuidv4(),
      title: 'Learn security',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
    },
    {
      id: uuidv4(),
      title: 'Go to fishing',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
    },
    {
      id: uuidv4(),
      title: 'fly to Japan',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: false,
    },
    {
      id: uuidv4(),
      title: 'workout',
      completed: false,
      // createdAt: random days ago format is 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      createdAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      updatedAt: dayjs()
        .subtract(Math.floor(Math.random() * 100), 'day')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
      priority: Math.floor(Math.random() * 3),
      isGoing: true,
    },
  ],
};
