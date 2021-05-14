import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { removeBook } from '../actions';

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = {
  onclick: (id) => removeBook(id),
};

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
