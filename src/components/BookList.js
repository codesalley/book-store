import PropTypes from 'prop-types';
import Book from './Book';
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
        </tr>
      </thead>
      <tbody>

        {books.map((book, index) => <Book book={book} key={index.toString()} />)}
      </tbody>
    </table>
  </div>
);

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
