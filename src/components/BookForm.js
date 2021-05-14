import CATEGORIES from '../utils/categories';

const BookForm = () => (
  <div>
    <form>

      <label htmlFor="title" className="form-label">
        <p> Book Title</p>
        <input id="title" type="text" className="form-control" placeholder="eg Dr, Wahab" />
      </label>

      <label htmlFor="author" className="form-label">
        <p> Book Author</p>
        <input id="author" type="text" className="form-control" placeholder="eg Avengers" />
      </label>
      <label htmlFor="author" className="form-label">
        <p> Release Year</p>
        <input id="author" type="date" className="form-control" placeholder="eg Avengers" />
      </label>

      <label htmlFor="category" className="form-label">
        <p>  Book Category </p>
        <select id="category">
          {CATEGORIES.map((ele, index) => <option key={index.toString()}>{ele}</option>)}
        </select>
      </label>

    </form>
  </div>
);

export default BookForm;
