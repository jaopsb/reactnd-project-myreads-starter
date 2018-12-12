import React from 'react';
//import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author, imageLinks, status, onChange } = props;
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
            <select value={status} onChange={(e) => {
              onChange(e, id);
            }
            }>
              <option value="move" disabled>Move to...</option>
              <option value="CURRENT">Currently Reading</option>
              <option value="WANT">Want to Read</option>
              <option value="READ">Read</option>
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
