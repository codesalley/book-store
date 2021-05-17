import './App.css';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="form-list">
        <BookList />
      </div>
      <div className="new-book">
        <h2 className="addNew-book">ADD NEW BOOK</h2>
        <BookForm />
      </div>
    </div>
  );
}

export default App;
