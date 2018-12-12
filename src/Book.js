import React from 'react';
//import PropTypes from 'prop-types';

const Book = ({ id, title, author, bookURL, status, onChange }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookURL})` }}></div>
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

export default Book;
