import React from 'react';
import './App.css';
import BooksPage from './BooksPage';
import SearchPage from './SearchPage';
import * as BookAPI from './BooksAPI';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    console.log("Component did mount")
    BookAPI
      .getAll()
      .then(data => {
        this.setState({ books: data })
      })
      .catch(err => console.log("ERROR", err));
  }

  /*Function to filter the state array and return only the books that the user is currently reading*/
  getCurrentlyReadingBooks = () => this.state.books.filter(book => book.shelf === 'currentlyReading');

  /*Funciton to filter only the books the user want to read */
  getWantToReadBooks = () => this.state.books.filter(book => book.shelf === 'wantToRead');

  /*Function to filter only the books the user already read */
  getReadBooks = () => this.state.books.filter(book => book.shelf === 'read');

  /*Change the state of a book after been switched on the select tag of a book */
  onChangeStatus = (event, id) => {
    let newShelf = event.target.value;

    let book = this.state.books.find(book => book.id === id);

    if (book) {
      BookAPI
        .update(book, newShelf)
        .then(() => {
          this.setState(prevState => ({
            books: [
              ...prevState.books.map(book => book.id === id ?
                {
                  ...book,
                  shelf: newShelf
                } : book
              )
            ]
          }));
        })
    }
  }

  /*Add a new book to the user library, the book enters with the status of want to read*/
  onAddBook = (book, newShelf) => {

    let bookToFind = this.state.books.find(b => b.id === book.id);

    if (bookToFind) {

      bookToFind.shelf = newShelf;

      BookAPI
        .update(bookToFind, newShelf)
        .then(
          this.setState(prevState => ({
            books: [
              ...prevState.books,
              bookToFind
            ]
          }))
        );
    } else {
      BookAPI
        .update(book, newShelf)
        .then(
          this.setState(prevState => ({
            books: [
              ...prevState.books,
              {
                ...book,
                shelf: newShelf
              }
            ]
          }))
        );
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksPage
            onChangeStatus={this.onChangeStatus}
            current={this.getCurrentlyReadingBooks}
            want={this.getWantToReadBooks}
            read={this.getReadBooks}
          />
        )} />
        <Route exact path="/search" render={() => (
          <SearchPage
            onChange={this.onAddBook}
            myBooks={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
