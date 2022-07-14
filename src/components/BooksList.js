import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookFromAPI } from '../redux/books/ThunkFunctions';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookFromAPI());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
};

export default BooksList;
