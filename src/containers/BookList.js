import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import './BookList.css';

const BookList = ({ books }) => (
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

        {books.map((book, index) => <Book book={book} key={index.toString()} />)}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string,
      name: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
      year: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: [],
};

export default connect(mapStateToProps)(BookList);
