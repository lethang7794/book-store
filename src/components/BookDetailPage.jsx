import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetailPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState(null);
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;

  useEffect(() => {
    if (!id) return;

    async function getBook() {
      setIsLoading(true);

      try {
        const url = `${BACKEND_API}/books/${id}`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setBook(data);
        } else {
          alert('Sorry. Something went wrong.');
        }
      } catch (error) {
        alert("Sorry. We can't connect to the server.");
      }

      setIsLoading(false);
    }
    getBook();
  }, [id, BACKEND_API]);

  const handleFavoriteBook = async (favoriteBook) => {
    const url = `${BACKEND_API}/favorites`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(favoriteBook),
      });

      if (response.ok) {
        alert('Added to favorites!');
      } else {
        alert('Already added to favorites!');
      }
    } catch (error) {
      alert("We can't connect with the server!");
    }
  };

  if (!book) return null;
  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className='d-flex justify-content-center'>
          <div>
            <img src={`${BACKEND_API}/${book.imageLink}`} alt={book.title} />
            <div className='p-3'>
              <div>
                <strong>Title:</strong> {book.title}
              </div>
              <div>
                <strong>Author:</strong> {book.author}
              </div>
              <div>
                <strong>Year</strong>: {book.year}
              </div>
              <div>
                <strong>Pages</strong>: {book.pages}
              </div>
              <div>
                <strong>Language</strong>: {book.language}
              </div>
            </div>
            <Button
              className='d-block mx-auto'
              onClick={() => handleFavoriteBook(book)}
            >
              Favorite
            </Button>
          </div>
        </div>
      )}
      <ToastContainer
        transition={Zoom}
        position='bottom-right'
        newestOnTop
        limit={3}
      />
    </>
  );
};

export default BookDetailPage;
