import uuid from 'uuid';
import CATEGORIES from '../utils/categories';

export const books = [
  {
    id: uuid.v4(),
    name: 'keep Me Calm',
    author: 'Dr, Dawuni Manzi',
    category: CATEGORIES[3],
  },
  {
    id: uuid.v4(),
    name: 'One Piece The Strongest',
    author: 'Erebor',
    category: CATEGORIES[0],
  },
  {
    id: '212121h2jhj',
    name: 'One Piece The Strongest ||',
    author: 'Erebor',
    category: CATEGORIES[0],
  },

];

export const filter = { filter: 'all' };
