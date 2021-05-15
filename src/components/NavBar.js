import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions';

const NavBar = ({ onchangeFilter }) => {
  const handleFilterChange = (e) => {
    onchangeFilter(e.target.value);
  };

  return (
    <div className="sub-nav">
      <div className="right-nav">
        <h1>Book Store</h1>
        <button className="btn" type="button">BOOKS</button>
        <CategoryFilter onchange={handleFilterChange} />
      </div>
      <div className="left-nav">
        Profile
      </div>

    </div>
  );
};

NavBar.propTypes = {
  onchangeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onchangeFilter: (filter) => changeFilter(filter),
};

export default connect(null, mapDispatchToProps)(NavBar);
