import axios from 'axios';

export default class ToDoServices {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit',
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }
}
