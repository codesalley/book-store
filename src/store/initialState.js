import uuid from 'uuid';
import { format } from 'date-fns';
import CATEGORIES from '../utils/categories';

const books = [
  {
    id: uuid.v4(),
    name: 'keep Me Calm',
    author: 'Dr, Dawuni Manzi',
    year: format(Date.now(), 'yyy MMM'),
    category: CATEGORIES[3],
  },
  {
    id: uuid.v4(),
    name: 'One Piece The Strongest',
    author: 'Erebor',
    year: format(Date.now(), 'yyy MMM'),
    category: CATEGORIES[0],
  },
  {
    id: '212121h2jhj',
    name: 'One Piece The Strongest ||',
    author: 'Erebor',
    year: format(Date.now(), 'yyy MMM'),
    category: CATEGORIES[0],
  },

];

export default books;
