/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import './BookList.css';

const BookList = ({
  books, onclick, filter, handleFilterChange,
}) => {
  console.log(handleFilterChange);
  return (
    <div className="main-book-list">
      <div className="fliter-div">

        <CategoryFilter />
      </div>
      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>CATEGORY</th>
            <th>YEAR</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>

          {books.map((book, index) => <Book book={book} key={index.toString()} onclick={onclick} />)}
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape),
  onclick: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: this.state.filter,
});

const mapDispatchToProps = {
  onclick: (id) => removeBook(id),
  handleFilterChange: (filter) => changeFilter(filter),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
