import { connect } from 'react-redux';
import BookForm from '../components/BookForm';
import { createBook } from '../actions';

const mapDispatchToProps = {
  onSubmit: (name, author, year, category) => createBook(name, author, year, category),
};

const NewBookContainer = connect(null, mapDispatchToProps)(BookForm);

export default NewBookContainer;
