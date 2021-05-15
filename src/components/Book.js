import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { book, onclick } = props;
  return (
    <div className="book-card">
      <div className="book-details">
        <p className="category">{book.category}</p>
        <p className="book-title">{book.name}</p>
        <p className="book-author">{book.author}</p>
        <div className="book-actions">

          <button className="remove-btn" type="button" onClick={() => onclick(book.id)}>X</button>
          <button className="remove-btn" type="button" onClick={() => onclick(book.id)}>X</button>
          <button className="remove-btn" type="button" onClick={() => onclick(book.id)}>X</button>
        </div>
      </div>
      <div className="read-status">
        book status
      </div>
      <div className="book-update">
        update book
      </div>
    </div>

  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
    year: PropTypes.string,
    slice: PropTypes.func,
  }).isRequired,
  onclick: PropTypes.func.isRequired,
};

export default Book;
