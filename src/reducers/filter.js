import { filter } from '../store/initialState';
import { CHANGE_FILTER } from '../actions/types';

const filterReducer = (state = filter, action) => {
  const { type, payload } = action();

  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
