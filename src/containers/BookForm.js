import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = ({ onSubmit }) => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    year: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title, author, year, category,
    } = bookDetails;
    if (title && author && year && category) {
      onSubmit(title, author, format(new Date(year), 'MMM YYY'), category);
      setBookDetails({
        title: '',
        author: '',
        year: '',
        category: '',
      });
    }
  };

  const handleChange = ({ target: { id, value } }) => {
    setBookDetails((oldData) => ({
      ...oldData,
      [id]: value,
    }));
  };

  return (
    <div className="main-form">
      <div className="form-div">
        <form onSubmit={handleSubmit}>

          <div className="form-label">
            <p> Book Title</p>
            <input value={bookDetails.title} onChange={handleChange} id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />
          </div>

          <div className="form-label">
            <p> Book Author</p>
            <input value={bookDetails.author} onChange={handleChange} id="author" type="text" className="form-control" placeholder="eg Avengers" />
          </div>
          <div className="form-label">
            <p> Release Year</p>
            <input value={bookDetails.year} onChange={handleChange} id="year" type="date" className="form-control" placeholder="eg Avengers" />
          </div>

          <div className="form-label">
            <p>  Book Category </p>
            <select value={bookDetails.category} id="category" onChange={handleChange}>
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
