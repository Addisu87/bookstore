// Actions
const ADD_BOOK = 'book-store-cms/Books/ADD';
const REMOVE_BOOK = 'book-store-cms/Books/REMOVE_BOOK';
const LOAD_BOOK = 'book-store-cms/Books/LOAD_BOOK';

const defaultBooks = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: '3',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

// Reducer
const booksReducer = (state = defaultBooks, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case LOAD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
};

// Action Creators

export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook,
  };
}

export function loadBook(book) {
  return {
    type: LOAD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
}

export default booksReducer;
