import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

//  Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE_BOOK';
const LOAD_BOOK = 'book-store-cms/Books/LOAD_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Ay8zFgyIf64kPiLrslqJ/books';

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
      return state.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => {
  const newBook = { item_id: uuidv4(), ...book };
  return async (dispatch) => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });
    const newBookToState = { id: newBook.item_id, ...newBook };
    dispatch({ type: ADD_BOOK, payload: newBookToState });
  };
};

export const loadBook = () => async (dispatch) => {
  const response = await axios.get(URL);
  const books = Object.keys(response.data).map((itemId) => ({
    id: itemId,
    ...response.data[itemId][0],
  }));
  dispatch({ type: LOAD_BOOK, payLoad: [...books] });
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(URL + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  dispatch({ type: REMOVE_BOOK, payload: { id } });
};

export default booksReducer;
