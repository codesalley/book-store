import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';
import './BookList.css';

const BookList = ({ books, onclick }) => (
  <div className="main-book-list">
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

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape),
  onclick: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  onclick: (id) => removeBook(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
