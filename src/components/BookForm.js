/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { format } from 'date-fns';
import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = ({ onSubmit }) => {
  const [submited, setSubmit] = useState(false);
  const bookTitle = useRef();
  const bookAuthor = useRef();
  const bookYear = useRef();
  const bookCategory = useRef();

  const addBook = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (typeof onSubmit === 'function') {
      if (bookTitle.current.value && bookAuthor.current.value && bookYear.current.value && bookCategory.current.value) {
        onSubmit(bookTitle.current.value, bookAuthor.current.value, format(new Date(bookYear.current.value), 'MMM YYY'), bookCategory.current.value);
        bookTitle.current.value = null;
        bookAuthor.current.value = null;
        bookYear.current.value = null;
        bookCategory.current.value = null;
      }
    }
    setSubmit(false);
  };

  return (
    <div className="main-form">
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
            <select id="category" ref={bookCategory}>
              {CATEGORIES.map((ele, index) => <option key={index.toString()}>{ele}</option>)}
            </select>
          </div>
          <button disabled={submited} className="btn" type="submit">Add Book</button>

        </form>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookForm;
