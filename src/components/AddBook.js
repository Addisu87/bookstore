import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/ThunkFunctions';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputText({ title: '', author: '' });
  };

  const newBook = {
    id: uuidv4(),
    title: inputText.title.value,
    author: inputText.author.value,
    category: 'Fiction',
  };

  const handleAddBook = () => {
    dispatch(addBook(newBook));
  };

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormContainer>
      <Title>Add new book</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Book title"
          id="title"
          value={inputText.title}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="author"
          placeholder="Author"
          id="author"
          value={inputText.author}
          onChange={handleInputChange}
          required
        />
        <Button
          type="submit"
          onClick={handleAddBook}
          className="btn btn-success"
        >
          ADD BOOK
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddBook;

const FormContainer = styled.section`
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-family: var(--montserrat);
  font-size: 1rem;
  font-weight: bold;
  color: var(--mid-gray);
  margin-bottom: 6px;
`;

const Form = styled.form`
  width: 100%;
  text-align: center;
  margin-inline: auto;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Input = styled.input`
  width: 80%;
  border: 1px solid #e8e8e8;
  padding: 2px 8px;
  margin: 4px;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    width: 30%;
    padding: 8px 20px;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  display: block;
  margin-top: 12px;
  margin-inline: auto;
  padding: 0.4rem 2rem;
  background-color: var(--blue);
  font-family: var(--roboto);
  font-weight: bold;
  font-size: 0.6rem;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin-top: 30px;
    font-size: 0.9rem;
    padding-inline: 3rem;
  }
`;
