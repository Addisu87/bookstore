import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/ThunkFunctions';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  const complete = Math.floor(Math.random() * 100);
  const percentageComplete = `${complete}%`;
  const CurrentChapterNumber = `CHAPTER ${Math.floor(complete / 5, 0)}`;

  return (
    <ul className="bookList">
      <li key={id}>
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

        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-statistics">
            <p className="percent-complete">{percentageComplete}</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
        </div>

        <div className="chapter-container">
          <p>CURRENT CHAPTER</p>
          <p>{CurrentChapterNumber}</p>
          <button type="button">UPDATE PROGRESS</button>
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
