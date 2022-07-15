import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/ThunkFunctions';
import useWindowSize from './useWindowSize';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  const isDesktop = useWindowSize();

  const Completed = Math.floor(Math.random() * 100);
  const progress = `${Completed}%`;
  const CurrentChapter = `CHAPTER ${Math.floor(Completed / 5, 0)}`;

  return (
    <BookInfoContainer>
      <BookList>
        <ListItem key={id}>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Author>{author}</Author>
          <BookOptions>
            <li>
              <BookOption type="button">Comments </BookOption>
            </li>
            <li>
              <BookOption type="button" onClick={handleRemove}>
                Remove
              </BookOption>
            </li>
            <li>
              <BookOption className="edit" type="button">
                Edit
              </BookOption>
            </li>
          </BookOptions>

          <BookProgressContainer>
            <CircularProgressBar
              size={60}
              animationSmooth="1s ease-out"
              colorCircle="#f1f1f1"
              colorSlice="#0290ff"
              percent={progress}
              number={!isDesktop}
            />
            {isDesktop && (
              <ProgressNumContainer>
                <ProgressStatistics>{progress}</ProgressStatistics>
                <ProgressCompleted>Completed</ProgressCompleted>
              </ProgressNumContainer>
            )}
          </BookProgressContainer>

          <ChapterContainer>
            <ChapterLegend>CURRENT CHAPTER</ChapterLegend>
            <Chapter>{CurrentChapter}</Chapter>
            <UpdateProgressBtn type="button">UPDATE PROGRESS</UpdateProgressBtn>
          </ChapterContainer>
        </ListItem>
      </BookList>
    </BookInfoContainer>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BookList = styled.ul`
  list-style: none;
  width: 90%;
  margin: 20px auto;
  max-height: 50vh;
  min-height: 50vh;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    max-height: 60vh;
    min-height: 60vh;
  }
`;

const ListItem = styled.li`
  background-color: var(--white);
  border: 1px solid #e8e8e8;
  margin: 15px 0;
  padding: 5px 20px;
  min-height: 119px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr 2fr;
  }
`;

const Category = styled.span`
  opacity: 0.5;
  font-size: 0.6rem;
  font-family: var(--montserrat);
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Title = styled.h3`
  color: black;
  font-size: 1rem;
  font-family: var(--roboto);
  letter-spacing: -0.2px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Author = styled.span`
  color: var(--blue);
  font-size: 0.6rem;
  font-family: var(--roboto);
  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const BookOptions = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  gap: 4%;
  margin-top: 8px;
`;

const BookOption = styled.button`
  appearance: none;
  outline: none;
  border: none;
  color: var(--blue);
  background-color: transparent;
  font-size: 0.6rem;
  font-family: var(--roboto);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const BookProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
  }
`;

const ProgressNumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ProgressStatistics = styled.span`
  font-family: var(--montserrat);
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProgressCompleted = styled.span`
  font-family: var(--montserrat);
  font-size: 0.6rem;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ChapterContainer = styled.div`
  grid-area: 2/1/3/3;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: 1fr, 1fr;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    grid-area: auto;
    margin-left: 30%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
  }
`;

const ChapterLegend = styled.h4`
  font-family: var(--roboto);
  opacity: 0.5;
  font-weight: 300;
  font-size: 0.4rem;
  @media screen and (min-width: 768px) {
    font-size: 0.65rem;
  }
`;

const Chapter = styled.p`
  font-family: var(--roboto);
  font-size: 0.7rem;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const UpdateProgressBtn = styled.button`
  outline: none;
  border: none;
  display: block;
  max-width: 140px;
  background-color: var(--blue);
  font-family: var(--roboto);
  letter-spacing: 0.5px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: 8px 12px;
  font-size: 0.5rem;
  grid-area: 1/2/3/3;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    padding: 0.4rem 2rem;
    font-size: 0.6rem;
    width: auto;
    max-width: none;
  }
`;
