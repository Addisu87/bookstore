import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <ul className="bookList">
      <li key={id}>
        <div className="bookWrapper">
          <div className="category">{category}</div>
          <div className="book">
            <h2 className="title">{title}</h2>
            <p className="author">{author}</p>
          </div>
          <div className="bookActions">
            <button className="comments" type="button" id={`comments-${id}`}>
              Comments
            </button>
            <button
              className="remove"
              type="button"
              id={`comments-${id}`}
              onClick={handleRemove}
            >
              Remove
            </button>
            <button className="edit" type="button" id={`comments-${id}`}>
              Edit
            </button>
          </div>

          <div className="progress">Progress Icon</div>

          <div className="updateProgress">
            <p>Current Chapter</p>
            <p>Chapter</p>
            <button type="button">Update Progress</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
