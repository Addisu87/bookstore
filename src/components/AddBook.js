import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title: '',
      author: '',
      category: 'default',
    };
    
    dispatch(addBook(newBook));

    setInputText({ title: '', author: '' });
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
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
