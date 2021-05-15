/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';
import './BookList.css';

const BookList = ({
  books, onclick, filter,
}) => (
  <div className="main-book-list">

    {filter.filter === 'all'
      ? books.map((book, index) => <Book book={book} key={index.toString()} onclick={onclick} />)
      : books.filter((ele) => ele.category === filter.filter).map((book, index) => <Book book={book} key={index.toString()} onclick={onclick} />)}

  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape),
  onclick: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    filter: PropTypes.string.isRequired,
  }).isRequired,

};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = {
  onclick: (id) => removeBook(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
