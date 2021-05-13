import uuid from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';
import books from '../store/initialState';

const booksReducer = (state = books, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, {
        id: uuid.v4(),
        name: payload.name,
        author: payload.author,
        year: payload.year,
        category: payload.category,
      }];

    case REMOVE_BOOK:
      return [...state.filter((e) => e.id !== payload.id)];

    default:
      return state;
  }
};

export default booksReducer;
