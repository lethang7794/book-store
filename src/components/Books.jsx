import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Books = ({ books }) => {
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  return (
    <>
      <CardColumns className='BookColumns'>
        {books.map((book, index) => (
          <Link
            to={`/books/${book.id}`}
            key={index}
            className='text-decoration-none'
          >
            <Card className='BookCard'>
              <Card.Img
                variant='top'
                src={`${BACKEND_API}/${book.imageLink}`}
              />
              <Card.Body>
                <Card.Title className='text-dark'>{book.title}</Card.Title>
                <Card.Text className='text-secondary'>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </CardColumns>
    </>
  );
};

export default Books;
