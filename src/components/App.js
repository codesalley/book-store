import './App.css';
import { useState } from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <div className="sub-nav">
        <h1>Book Store </h1>
        <button onClick={() => { setToggle((e) => !e); }} className="btn" type="button">{toggle ? 'Close Form' : 'Add Book' }</button>
      </div>
      <div className="form-list">

        {toggle ? <BookForm /> : null }
        <BookList />
      </div>
    </div>
  );
}

export default App;
