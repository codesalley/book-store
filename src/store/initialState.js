import uuid from 'uuid';
import CATEGORIES from '../utils/categories';

const bookStore = [
  {
    id: uuid.v4(),
    name: 'keep Me Calm',
    author: 'Dr, Dawuni Manzi',
    year: Date.now(),
    category: CATEGORIES[3],
  },
  {
    id: uuid.v4(),
    name: 'One Piece The Strongest',
    author: 'Erebor',
    year: Date.now(),
    category: CATEGORIES[0],
  },

];

export default bookStore;
