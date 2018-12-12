import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

const BookShelf = props => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => <Book key={book.id} {...book} onChange={props.onChange} />)}
        </ol>
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add Book</Link>
    </div>
  </div>
);

export default BookShelf;