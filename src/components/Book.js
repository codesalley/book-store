import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { book, onclick } = props;
  return (
    <tr>
      <td>{book.id.slice(0, 2)}</td>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td>{book.year}</td>
      <td className="action-column">
        {' '}
        <button className="remove-btn" type="button" onClick={() => onclick(book.id)}>X</button>
        {' '}
      </td>
    </tr>
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
