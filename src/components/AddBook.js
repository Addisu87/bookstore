import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputText({ title: '', author: '' });
  };

  const newBook = {
    id: uuidv4(),
    title: inputText.title.value,
    author: inputText.author.value,
    category: 'Fiction'
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));
  };

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="submit-form">
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Book title"
          id="title"
          value={inputText.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          className="form-control"
          name="author"
          placeholder="author"
          id="author"
          value={inputText.author}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          onClick={handleAddBook}
          className="btn btn-success"
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
