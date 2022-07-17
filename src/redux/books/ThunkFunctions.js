import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewBook,
  getBooks,
  getBooksAPI,
  postBook,
  removeOneBook,
} from './books';
import { LOAD_BOOK, REMOVEASYNC, AddASYNC } from './types';

// get books from the API (Server)
const bookFromAPI = createAsyncThunk(LOAD_BOOK, async () => {
  const response = await getBooks();
  const books = getBooksAPI(response);
  return books;
});

// add new books to the API(Server)
const addBook = createAsyncThunk(AddASYNC, async (newBook, { dispatch }) => {
  const response = await postBook(newBook);
  dispatch(addNewBook({ ...newBook }));
  return response;
});

// remove a book from the API (Server)
const removeBook = createAsyncThunk(REMOVEASYNC, async (id, { dispatch }) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  dispatch(removeOneBook(id));
  return response;
});

export { bookFromAPI, addBook, removeBook };
