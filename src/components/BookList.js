/* eslint-disable react/prop-types */
import Book from './Book';

const BookList = ({ books }) => {
  console.log(books);
  return (
    <div className="main-book-list">
      <table>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>AUtheadOR</th>
          <th>CATEGORY</th>
        </tr>

        {books.map((book, index) => <Book book={book} key={index.toString()} />)}
      </table>
    </div>
  );
};

export default BookList;
