import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class SearchPage extends React.Component {
  state = {
    books: []
  }

  onChange = (e) => {
    let str = e.target.value;

    if (str !== "") {
      BooksAPI.search(str)
        .then(books => {

          if (!books.error) {
            this.setState({ books: [...books, ...this.props.myBooks] })
          } else {
            this.setState({ books: [] });
          }
        })
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/" >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.onChange} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.books &&
            <BookShelf
              onChange={(e, id) => {
                let newShelf = e.target.value;
                let book = this.state.books.find(book => book.id === id);
                this.props.onChange(book, newShelf);
              }}
              title={""}
              books={this.state.books}
            />}
        </div>
      </div>
    );
  }
}

export default SearchPage;