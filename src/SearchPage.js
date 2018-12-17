import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf';

class SearchPage extends React.Component {
  state = {
    books: []
  }

  filterBooks = (a1, a2) => {

    for (let i = 0; i < a1.length; i++) {
      for (let j = 0; j < a2.length; j++) {
        if (a1[i].id === a2[j].id) {
          a1.splice(i, 1, a2[j]);
          break;
        }
      }
    }
    return a1;
  }

  onChange = (e) => {
    let str = e.target.value;

    if (str !== "") {
      BooksAPI.search(str)
        .then(books => {

          if (!books.error) {
            this.setState({ books: [...this.filterBooks(books, this.props.myBooks)] })
          } else {
            this.setState({ books: [] });
          }
        })
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
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