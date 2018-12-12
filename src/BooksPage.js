import React from 'react';
import BookShelf from './BookShelf';

const BooksPage = props => (
  <div>
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
      </div>
      <BookShelf
        onChange={props.onChangeStatus}
        title={"Currently Reading"}
        books={props.current()} />
      <BookShelf
        onChange={props.onChangeStatus}
        title={"Want to Read"}
        books={props.want()} />
      <BookShelf
        onChange={props.onChangeStatus}
        title={"Read"}
        books={props.read()} />
    </div>
  </div>
);
export default BooksPage;