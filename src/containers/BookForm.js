import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = ({ onSubmit }) => {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title, author, category,
    } = bookDetails;
    if (title && author && category) {
      onSubmit(title, author, category);
      setBookDetails({
        title: '',
        author: '',
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

          <input value={bookDetails.title} onChange={handleChange} id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />

          <input value={bookDetails.author} onChange={handleChange} id="author" type="text" className="form-control" placeholder="eg Avengers" />
          <select value={bookDetails.category} id="category" onChange={handleChange} placeholder="Category">
            {CATEGORIES.map((ele, index) => <option className="option" key={index.toString()}>{ele}</option>)}
          </select>

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
