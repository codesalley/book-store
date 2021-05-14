/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = ({ onSubmit }) => {
  const [submited, setSubmit] = useState(false);
  const bookTitle = useRef();
  const bookAuthor = useRef();
  const bookYear = useRef();
  const bookCategory = useRef();
  if (typeof onSubmit === 'function') {
    console.log('true');
  }
  const addBook = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log('submitted');
    setSubmit(false);
  };

  return (
    <div className="form-div">
      <form onSubmit={addBook}>

        <div className="form-label">
          <p> Book Title</p>
          <input ref={bookTitle} id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />
        </div>

        <div className="form-label">
          <p> Book Author</p>
          <input ref={bookAuthor} id="author" type="text" className="form-control" placeholder="eg Avengers" />
        </div>
        <div className="form-label">
          <p> Release Year</p>
          <input ref={bookYear} id="author" type="date" className="form-control" placeholder="eg Avengers" />
        </div>

        <div className="form-label">
          <p>  Book Category </p>
          <select id="category">
            {CATEGORIES.map((ele, index) => <option ref={bookCategory} key={index.toString()}>{ele}</option>)}
          </select>
        </div>
        <button disabled={submited} className="btn" type="submit">Add Book</button>

      </form>
    </div>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
