import PropTypes from 'prop-types';

const Book = (books) => {
  const { book } = books;
  return (
    <tr>
      <td>{book.id.slice(0, 2)}</td>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
    </tr>
  );
};

Book.propType = {
  book: PropTypes.object,
};

export default Book;
