import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer, { loadBook } from './books/books';
import categoriesReducer from './categories/categories';

const preloadedState = {
  books: [],
  categories: [],
};

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
});

store.dispatch(loadBook());

export default store;
