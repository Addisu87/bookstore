import React, { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { loadBook } from '../redux/books/books';

const BooksList = () => {
  const books = createSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  return (
    <div className="booksWrapper">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <AddBook />
    </div>
  );
};

export default BooksList;
