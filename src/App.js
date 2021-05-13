import './App.css';
import BookForm from './components/BookForm';
import BookListContainer from './containers/BookListContainer';

function App() {
  return (
    <div className="App">
      <h1>Book Store </h1>
      <BookForm />
      <BookListContainer />
    </div>
  );
}

export default App;
