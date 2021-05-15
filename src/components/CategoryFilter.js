import PropTypes from 'prop-types';
import CATEGORIES from '../utils/categories';

const CategoryFilter = (handleFilterChange) => {
  const { onchange } = handleFilterChange;
  return (
    <select onChange={onchange} className="btn">
      <option value="all">All</option>
      {CATEGORIES.map((e, i) => <option key={i.toString()} value={e.toString()}>{e}</option>)}
    </select>
  );
};

CategoryFilter.propTpes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
