import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

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
