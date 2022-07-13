import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <button
        className="btn-category"
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check status
      </button>

      <span className="category">{status}</span>
    </div>
  );
};

export default Categories;
