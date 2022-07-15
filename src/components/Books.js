import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { bookFromAPI } from '../redux/books/ThunkFunctions';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookFromAPI());
  }, []);

  return (
    <BookWrapper>
      <BooksList />
      <AddBook />
    </BookWrapper>
  );
};

export default Books;

const BookWrapper = styled.section`
  background-color: var(--light-gray);
  padding-top: 20px;
`;
