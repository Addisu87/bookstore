// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOK = 'LOAD_BOOK';

// Reducer
const booksReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

// Action Creators

export function loadBook() {
  return { type: LOAD_BOOK };
}

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id
  };
}

export default booksReducer;
