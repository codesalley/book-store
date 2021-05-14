import CATEGORIES from '../utils/categories';
import './BookForm.css';

const BookForm = () => (
  <div className="form-div">
    <form>

      <div className="form-label">
        <p> Book Title</p>
        <input id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />
      </div>

      <div className="form-label">
        <p> Book Author</p>
        <input id="author" type="text" className="form-control" placeholder="eg Avengers" />
      </div>
      <div className="form-label">
        <p> Release Year</p>
        <input id="author" type="date" className="form-control" placeholder="eg Avengers" />
      </div>

      <div className="form-label">
        <p>  Book Category </p>
        <select id="category">
          {CATEGORIES.map((ele, index) => <option key={index.toString()}>{ele}</option>)}
        </select>
      </div>
      <button className="btn" type="submit">Add Book</button>

    </form>
  </div>
);

export default BookForm;
