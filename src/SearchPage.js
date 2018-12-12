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
            this.setState({ books })
          } else {
            this.setState({ books: [] });
          }
        })
        .catch(error => console.log(error));
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
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input type="text" onChange={this.onChange} placeholder="Search by title or author" />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.books &&
            <BookShelf
              onChangeStatus={(e, id) => console.log("status changed")}
              title={""}
              books={this.state.books}
            />}
        </div>
      </div>
    );
  }
}

export default SearchPage;