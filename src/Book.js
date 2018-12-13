import React from 'react';
//import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author, imageLinks, shelf, onChange } = props;
  let thumbnail = " ";

  if (imageLinks) {
    thumbnail = imageLinks.thumbnail;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: thumbnail !== " " ? `url(${thumbnail})` : "none" }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={(e) => {
              onChange(e, id);
            }}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="NONE">none</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li >
  );
}

export default Book;
