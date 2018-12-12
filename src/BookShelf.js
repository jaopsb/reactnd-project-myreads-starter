import React from 'react';
import Book from './Book';

const BookShelf = props => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => <Book key={book.id} {...book} />)}
        </ol>
      </div>
    </div>
  </div>
);

export default BookShelf;