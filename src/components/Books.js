import React from 'react';
import styled from 'styled-components';
import AddBook from './AddBook';
import BooksList from './BooksList';

const Books = () => (
  <BookWrapper>
    <BooksList />
    <AddBook />
  </BookWrapper>
);

export default Books;

const BookWrapper = styled.section`
  background-color: var(--light-gray);
  padding-top: 20px;
`;
