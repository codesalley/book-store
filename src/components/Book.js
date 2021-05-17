import PropTypes from 'prop-types';
import './Book.css';
import svgLoader from '../assets/loader.svg';

const Book = (props) => {
  const { book, onclick } = props;
  return (
    <div className="book-card">
      <div className="book-details">
        <p className="category">{book.category}</p>
        <p className="book-title">{book.name}</p>
        <p className="book-author">{book.author}</p>
        <div className="book-actions">

          <button className="remove-btn" type="button">Comments |</button>
          <button className="remove-btn" type="button" onClick={() => onclick(book.id)}>Remove |</button>
          <button className="remove-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="read-status">
        <img src={svgLoader} alt="spinner" />
        <div>
          <p className="status">70%</p>
          <p className="complete-status">Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p className="chapter-current">Current Chapter</p>
        <p className="chapter">Chapter 3: &quot;A Lesson Learned &quot;</p>
        <button type="button" className="btn btn-update">Update progress </button>
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
