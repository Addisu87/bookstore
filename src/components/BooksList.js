import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

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
