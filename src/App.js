import './App.css';
import { useState } from 'react';
import BookListContainer from './containers/BookListContainer';
import NewBookContainer from './containers/NewBookContainer';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <div className="sub-nav">
        <h1>Book Store </h1>
        <button onClick={() => { setToggle((e) => !e); }} className="btn" type="button">{toggle ? 'Close Form' : 'Add Book' }</button>
      </div>
      <div className="form-list">

        {toggle ? <NewBookContainer /> : null }
        <BookListContainer />
      </div>
    </div>
  );
}

export default App;
