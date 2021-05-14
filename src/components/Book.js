/* eslint-disable react/prop-types */
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

export default Book;
