import CATEGORIES from '../utils/categories';

const CategoryFilter = () => {
  console.log('render');
  return (
    <select>
      <option value="all">All</option>
      {CATEGORIES.map((e, i) => <option key={i.toString()} value={i.toString()}>{e}</option>)}
    </select>
  );
};

export default CategoryFilter;
