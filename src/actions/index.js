import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

export const createBook = (name, author, year, category) => ({
  type: CREATE_BOOK,
  payload: {
    name,
    author,
    year,
    category,

  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  },

});
