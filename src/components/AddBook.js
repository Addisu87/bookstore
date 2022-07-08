import React from 'react';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="bookForm" onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder="Book title" />
      <input name="author" type="text" placeholder="author" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
