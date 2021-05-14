import CATEGORIES from '../utils/categories';

const CategoryFilter = () => (
  <select>
    <option value="all">All</option>
    {CATEGORIES.map((e, i) => <option key={i.toString()}>{e}</option>)}
  </select>
);

export default CategoryFilter;
