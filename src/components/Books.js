import React from 'react';
import AddBook from './AddBook';
import BooksList from './BookList';

const Books = () => (
  <div className="booksWrapper">
    <BooksList />
    <AddBook />
  </div>
);

export default Books;
