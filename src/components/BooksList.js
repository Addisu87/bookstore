import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './AddBook';
import { loadBook } from '../redux/books/books';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  return (
    <div className="bookWrapper">
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}

      <AddBook />
    </div>
  );
};

export default BooksList;
