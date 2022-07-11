import React from 'react';

const Book = () => {
  const dummyBooks = [
    {
      id: '1',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: '2',
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      id: '3',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

  return (
    <ul className="bookList">
      {dummyBooks.map((book) => (
        <li key={book.id}>
          <div className="bookWrapper">
            <div className="category">{book.category}</div>
            <div className="book">
              <h2 className="title">{book.title}</h2>
              <p className="author">{book.author}</p>
            </div>
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

export default Book;
