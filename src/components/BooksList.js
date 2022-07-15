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
      {books.map(({
        id, title, author, category,
      }) => (
        <Book
          key={id}
          id={id}
          category={category}
          title={title}
          author={author}
        />
      ))}
    </>
  );
};

export default BooksList;
