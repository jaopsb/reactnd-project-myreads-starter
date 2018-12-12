import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BooksPage from './BooksPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  /* Initial state with the books of the static site */
  state = {
    books: [
      {
        id: 0,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        bookURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        status: 'CURRENT'
      },
      {
        id: 1,
        title: "Ender's Game",
        author: "Orson Scott Card",
        bookURL: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        status: "CURRENT"
      },
      {
        id: 2,
        title: "1776",
        author: "David McCullough",
        bookURL: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        status: "WANT"
      },
      {
        id: 3,
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        bookURL: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        status: "WANT"
      },
      {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        bookURL: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        status: "READ"
      },
      {
        id: 5,
        title: "Oh, the Places You'll Go!",
        author: "Seuss",
        bookURL: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
        status: "READ"
      },
      {
        id: 6,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        bookURL: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
        status: "READ"
      }
    ]
  }

  /*Function to filter the state array and return only the books that the user is currently reading*/
  getCurrentlyReadingBooks = () => this.state.books.filter(book => book.status === 'CURRENT');

  /*Funciton to filter only the books the user want to read */
  getWantToReadBooks = () => this.state.books.filter(book => book.status === 'WANT');

  /*Function to filter only the books the user already read */
  getReadBooks = () => this.state.books.filter(book => book.status === 'READ');

  /*Change the state of a book after been switched on the select tag of a book */
  onChangeStatus = (event, id) => {
    let newStatus = event.target.value;

    this.setState(prevState => ({
      books: [
        ...prevState.books.map(book => book.id === id ?
          {
            ...book,
            status: newStatus
          } : book
        )
      ]
    }));
  }

  /*Add a new book to the user library, the book enters with the status of want to read*/
  onAddBook = (obj) => {
    obj.status = 'WANT'
    this.setState(prevState => ({
      books: [
        ...prevState.books,
        obj
      ]
    }))
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
        <Route exact path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
