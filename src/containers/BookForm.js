import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = ({ onSubmit }) => {
  const [bookTitle, setTitle] = useState('');
  const [bookAuthor, setAuthor] = useState('');
  const [bookYear, setYear] = useState('');
  const [bookCategory, setCategory] = useState('');

  const clearFields = () => {
    setYear('');
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookTitle && bookAuthor
      && bookYear && bookCategory) {
      onSubmit(bookTitle, bookAuthor,
        format(new Date(bookYear), 'MMM YYY'), bookCategory);
    }
    clearFields();
  };
  const handleChange = (val) => {
    val.preventDefault();
    switch (val.target.id) {
      case 'title':
        return setTitle(val.target.value);
      case 'author':
        return setAuthor(val.target.value);
      case 'year':
        return setYear(val.target.value);
      case 'category':
        return setCategory(val.target.value);
      default:
        return false;
    }
  };

  return (
    <div className="main-form">
      <div className="form-div">
        <form onSubmit={handleSubmit}>

          <div className="form-label">
            <p> Book Title</p>
            <input value={bookTitle} onChange={handleChange} id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />
          </div>

          <div className="form-label">
            <p> Book Author</p>
            <input value={bookAuthor} onChange={handleChange} id="author" type="text" className="form-control" placeholder="eg Avengers" />
          </div>
          <div className="form-label">
            <p> Release Year</p>
            <input value={bookYear} onChange={handleChange} id="year" type="date" className="form-control" placeholder="eg Avengers" />
          </div>

          <div className="form-label">
            <p>  Book Category </p>
            <select value={bookCategory} id="category" onChange={handleChange}>
              {CATEGORIES.map((ele, index) => <option key={index.toString()}>{ele}</option>)}
            </select>
          </div>
          <button className="btn" type="submit">Add Book</button>

        </form>
      </div>
    </div>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: (name, author, year, category) => createBook(name, author, year, category),
};

export default connect(null, mapDispatchToProps)(BookForm);
