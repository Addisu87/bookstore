import URL from './ApiPath';
import { ADD_BOOK, REMOVE_BOOK, LOAD_BOOK } from './types';

// initial state books
const initialBooks = [];

// Reducer
const booksReducer = (state = initialBooks, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case `${LOAD_BOOK}/fulfilled`:
      return payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

// get (load) book from API
const getBooks = async () => {
  const response = await fetch(URL);
  const booksData = await response.json();
  return booksData;
};

// Action Creators
// get action creator
const getBooksAPI = (books) => {
  const APIBooks = Object.entries(books).map(([key, value]) => ({
    ...value[0],
    id: key,
  }));
  return APIBooks;
};

// add book to the API
const postBook = async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return response;
};

// action creator for add new book
const addNewBook = (newBook) => ({
  type: ADD_BOOK,
  newBook,
});

// action creator for remove new book
const removeOneBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;

export {
  getBooks, getBooksAPI, postBook, addNewBook, removeOneBook,
};
