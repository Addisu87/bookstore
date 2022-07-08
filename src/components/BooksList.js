import React from 'react';
import Book from './Book';

const BooksList = () => {
  const dummyBooks = [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
    },
    {
      id: '3',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
    },
  ];

  return (
    <ul className="bookList">
      {dummyBooks.map((book) => (
        <li key={book.id}>
          <div className="bookWrapper">
            <div className="genre">{book.genre}</div>
            <Book title={book.title} author={book.author} />
            <div className="bookActions">
              <button
                className="comments"
                type="button"
                id={`comments-${book.id}`}
              >
                Comments
              </button>
              <button
                className="remove"
                type="button"
                id={`comments-${book.id}`}
              >
                Remove
              </button>
              <button className="edit" type="button" id={`comments-${book.id}`}>
                Edit
              </button>
            </div>

            <div className="progress">Progress Icon</div>

            <div className="updateProgress">
              <div>Current Chapter</div>
              <div>Chapter</div>
              <button type="button">Update Progress</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
