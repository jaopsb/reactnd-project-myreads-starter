import React from 'react';
import BookShelf from './BookShelf';

class BooksPage extends React.Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          </div>
          <BookShelf
            onChange={this.props.onChangeStatus}
            title={"Currently Reading"}
            books={this.props.current()} />
          <BookShelf
            onChange={this.props.onChangeStatus}
            title={"Want to Read"}
            books={this.props.want()} />
          <BookShelf
            onChange={this.props.onChangeStatus}
            title={"Read"}
            books={this.props.read()} />
        </div>
      </div >
    );
  }
}

export default BooksPage;