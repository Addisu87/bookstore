import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import { bookFromAPI } from './books/ThunkFunctions';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.dispatch(bookFromAPI());

export default store;
