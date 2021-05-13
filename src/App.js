import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Book Store </h1>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
