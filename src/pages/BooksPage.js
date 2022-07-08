import React from 'react';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';

const BooksPage = () => (
  <div className="booksWrapper">
    <BooksList />
    <AddBook />
  </div>
);

export default BooksPage;
