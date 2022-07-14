import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, REMOVE_BOOK, LOAD_BOOK } from './actions';

const URL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ay8zFgyIf64kPiLrslqJ/books';

// initial state books
const initialBooks = [];

// Reducer
const booksReducer = (state = initialBooks, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case LOAD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

// Action Creators

// get (load) book
export const loadBook = createAsyncThunk('LOAD_BOOK ', async (dispatch) => {
  const response = await axios.get(URL);
  const books = Object.keys(response.data).map((bookId) => ({
    item_id: bookId,
    ...response.data[bookId][0]
  }));
  dispatch({ type: LOAD_BOOK, payLoad: [...books] });
});

// POST method implementation:

// add book to the API
export const postBook = async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
  return response;
};

export const addNewBook = (newBook) => ({
  type: ADD_BOOK,
  newBook
});

export const addBook = createAsyncThunk(
  'ADD_BOOK',
  async (newBook, { dispatch }) => {
    const response = await postBook(newBook);
    dispatch(addNewBook({ id: newBook.item_id, ...newBook }));
    return response;
  }
);

// remove book from the API
export const removeOneBook = (id) => ({
  type: REMOVE_BOOK,
  id
});

export const removeBook = createAsyncThunk(
  'REMOVE_BOOK',
  async (id, dispatch) => {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item_id: id })
    });
    dispatch(removeOneBook(id));
    return response;
  }
);

export default booksReducer;
