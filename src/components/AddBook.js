import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/ThunkFunctions';
import '../styles/addBook.css';

const categories = [
  'Computer Programming',
  'Action',
  'Adventure',
  'Fantasy',
  'Horror',
  'Classic',
  'History',
  'Detective and Mystery',
  'Romance',
  'Sci-Fi',
  'Humor',
  'Tragedy',
  'Documentary',
];

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });
  const [categoryName, setCategoryName] = useState('');
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputText({ title: '', author: '' });
  };

  // New book
  const newBook = {
    item_id: uuidv4(),
    title: inputText.title,
    author: inputText.author,
    category: categoryName,
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));
  };

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="componentDivider" />
      <h2 className="addBookTitle">Add new book</h2>
      <div className="inputsContainer">
        <TextField
          required
          id="outlined-size-small"
          size="small"
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          placeholder="Book title"
          value={inputText.title}
          onChange={handleInputChange}
          className="inputs"
        />
        <TextField
          required
          id="outlined-size-small"
          size="small"
          label="Author"
          variant="outlined"
          type="text"
          name="author"
          placeholder="Author"
          value={inputText.author}
          onChange={handleInputChange}
          className="inputs"
        />
        <div>
          <Autocomplete
            id="outlined-size-small"
            size="small"
            value={categoryName}
            onChange={(event, newValue) => {
              setCategoryName(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={categories}
            sx={{ width: 150 }}
            /* eslint-disable */
            renderInput={(params) => (
              <TextField {...params} placeholder="Category" />
            )}
            /* eslint-enable */
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          onClick={handleAddBook}
          className="addBookBtn"
        >
          ADD BOOK
        </Button>
      </div>
    </form>
  );
};

export default AddBook;
