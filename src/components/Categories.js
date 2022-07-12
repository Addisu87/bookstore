import { createSelector } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = createSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <button className="btn-category" type="button" onClick={handleStatus}>
        Check status
      </button>

      <span className="category">{status}</span>
    </div>
  );
};

export default Categories;
