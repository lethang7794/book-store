import React, { useEffect, useState } from 'react';
import Books from './Books';

const HomePage = ({ BACKEND_API }) => {
  const limit = 10;

  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);

      try {
        // e.g. http://localhost:5000/books?_page=1&_limit=10
        const url = `${BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setBooks(data);
        } else {
          setErrorMessage(
            `Sorry, something went wrong while we were searching for the books (${data.message})`
          );
        }
      } catch (error) {
        setErrorMessage(
          `Sorry, we can't connect to the server (${error.message})`
        );
      }

      setIsLoading(false);
    }

    fetchBooks();
  }, [pageNum, BACKEND_API]);

  return (
    <>
      <h1>Homepage</h1>

      {errorMessage ? <div>{errorMessage}</div> : null}

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Books books={books} BACKEND_API={BACKEND_API} />
      )}
    </>
  );
};

export default HomePage;
