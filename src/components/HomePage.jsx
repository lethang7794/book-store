import React, { useEffect, useState } from 'react';
import Books from './Books';
import Pagination from './Pagination';

const HomePage = ({ BACKEND_API }) => {
  const PER_PAGE = 10;
  const totalPages = 100 / PER_PAGE;
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);

      try {
        let url = `${BACKEND_API}/books?_page=${currentPage}&_limit=${PER_PAGE}`;
        // e.g. http://localhost:5000/books?_page=1&_limit=10

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
  }, [currentPage, BACKEND_API]);

  const handleNextPageClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPageClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <>
      <h1>Homepage</h1>

      {errorMessage ? <div>{errorMessage}</div> : null}

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Books books={books} BACKEND_API={BACKEND_API} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPageClick={handleNextPageClick}
            handlePreviousPageClick={handlePreviousPageClick}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
