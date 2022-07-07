import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { db } from '../mock/mockData';
const mock = new MockAdapter(axios);

mock.onGet('/api/todos').reply(200, db.todos);

const getTodos = async () => {
  try {
    const res = await axios.get('/api/todos');
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { getTodos };
