import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addNewBook,
  getBooks,
  getBooksAPI,
  postBook,
  removeOneBook,
} from './books';

export const bookFromAPI = createAsyncThunk('LOAD_BOOK', async (dispatch) => {
  const response = await getBooks();
  dispatch(getBooksAPI(response));
});

export const addBook = createAsyncThunk(
  'ADD_BOOK',
  async (newBook, { dispatch }) => {
    const response = await postBook(newBook);
    dispatch(addNewBook({ id: newBook.item_id, ...newBook }));
    return response;
  },
);

// remove book from the API
export const removeBook = createAsyncThunk(
  'REMOVE_BOOK',
  async (id, { dispatch }) => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });
    dispatch(removeOneBook(id));
    return response;
  },
);
