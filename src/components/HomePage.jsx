import React, { useEffect, useState } from 'react';
import Books from './Books';
import Pagination from './Pagination';
import SearchForm from './SearchForm';

const HomePage = () => {
  const PER_PAGE = 10;
  const totalPages = 100 / PER_PAGE;
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [books, setBooks] = useState([]);

  const [searchInput, setSearchInput] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);

      try {
        const BACKEND_API = process.env.REACT_APP_BACKEND_API;
        let url = `${BACKEND_API}/books?_page=${currentPage}&_limit=${PER_PAGE}`;
        // e.g. http://localhost:5000/books?_page=1&_limit=10

        if (query) {
          url += `&q=${query}`;
        }

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

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }

    fetchBooks();
  }, [currentPage, query]);

  const handleNextPageClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPageClick = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };

  return (
    <>
      <h1 className='text-center'>Homepage</h1>

      <SearchForm
        handleSearchFormSubmit={handleSearchFormSubmit}
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
      />

      {errorMessage ? <div>{errorMessage}</div> : null}

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Books books={books} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPageClick={handleNextPageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            isLoading={isLoading}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
