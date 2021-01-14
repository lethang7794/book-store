import React from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const Books = ({ books, BACKEND_API }) => (
  <>
    <CardColumns className='BookColumns'>
      {books.map((book, index) => (
        <Card key={index} className='BookCard'>
          <Card.Img variant='top' src={`${BACKEND_API}/${book.imageLink}`} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.author}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  </>
);

export default Books;
