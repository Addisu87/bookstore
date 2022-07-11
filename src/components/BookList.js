import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = (props) => {
  const { title, author } = props;
  return <Book title={title} author={author} />;
};

BooksList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BooksList;
