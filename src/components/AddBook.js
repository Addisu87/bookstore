import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputText({ title: '', author: '' });
  };

  const newBook = {
    id: uuidv4(),
    title: inputText.title,
    author: inputText.author,
    category: 'default',
  };

  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addBook(newBook));
  };

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <input
        className="input_text"
        name="title"
        type="text"
        placeholder="Book title"
        value={inputText.title}
        onChange={handleChange}
        required
      />
      <input
        className="input_text"
        name="author"
        type="text"
        placeholder="author"
        value={inputText.author}
        onChange={handleChange}
        required
      />
      <button type="submit" onClick={handleAdd}>
        ADD BOOK
      </button>
    </form>
  );
};

export default AddBook;
